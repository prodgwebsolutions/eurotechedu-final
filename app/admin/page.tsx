'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import AuthGuard from '@/components/auth-guard';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/firebase';
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  orderBy,
  Timestamp,
} from 'firebase/firestore';

interface Lead {
  id: string;
  Timestamp: string;
  createdAt: Date;
  'Full Name': string;
  Email: string;
  Phone: string;
  Program: string;
  Destination: string;
  Message: string;
  Status: string;
  Notes: string;
}

type Status = 'New' | 'Contacted' | 'Converted' | 'Lost';
type DatePreset = 'all' | 'today' | 'yesterday' | 'last7' | 'custom';

const STATUS_OPTIONS: Status[] = ['New', 'Contacted', 'Converted', 'Lost'];

const STATUS_STYLES: Record<Status, { badge: string; row: string; dot: string }> = {
  New:       { badge: 'bg-blue-100 text-blue-700 border-blue-200',     row: 'hover:bg-blue-50/40',   dot: 'bg-blue-500' },
  Contacted: { badge: 'bg-amber-100 text-amber-700 border-amber-200',  row: 'hover:bg-amber-50/40',  dot: 'bg-amber-500' },
  Converted: { badge: 'bg-green-100 text-green-700 border-green-200',  row: 'hover:bg-green-50/40',  dot: 'bg-green-500' },
  Lost:      { badge: 'bg-red-100 text-red-600 border-red-200',        row: 'hover:bg-red-50/30',    dot: 'bg-red-500' },
};

const PROGRAM_COLORS: Record<string, string> = {
  mbbs:        'bg-rose-100 text-rose-700',
  engineering: 'bg-blue-100 text-blue-700',
  mba:         'bg-purple-100 text-purple-700',
  phd:         'bg-amber-100 text-amber-700',
};

const DEST_COLORS: Record<string, string> = {
  usa:       'bg-sky-100 text-sky-700',
  uk:        'bg-indigo-100 text-indigo-700',
  germany:   'bg-yellow-100 text-yellow-700',
  australia: 'bg-green-100 text-green-700',
  nz:        'bg-teal-100 text-teal-700',
  dubai:     'bg-orange-100 text-orange-700',
};

function ProgramBadge({ value }: { value: string }) {
  const cls = PROGRAM_COLORS[value?.toLowerCase()] ?? 'bg-gray-100 text-gray-700';
  return <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${cls}`}>{value || '—'}</span>;
}

function DestBadge({ value }: { value: string }) {
  const cls = DEST_COLORS[value?.toLowerCase()] ?? 'bg-gray-100 text-gray-700';
  return <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${cls}`}>{value || '—'}</span>;
}

function NotesCell({ lead, onSave }: { lead: Lead; onSave: (id: string, notes: string) => void }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(lead.Notes ?? '');
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => { setValue(lead.Notes ?? ''); }, [lead.Notes]);

  const save = () => {
    setEditing(false);
    if (value !== lead.Notes) onSave(lead.id, value);
  };

  if (editing) {
    return (
      <textarea
        ref={ref}
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={save}
        rows={2}
        className="w-full min-w-[180px] text-xs px-2 py-1 border border-[#1E3A5F]/30 rounded resize-none focus:outline-none focus:ring-1 focus:ring-[#1E3A5F]/40"
      />
    );
  }
  return (
    <button onClick={() => setEditing(true)} title="Click to edit" className="text-left w-full text-xs text-gray-500 hover:text-gray-800 group min-w-[120px]">
      {value ? <span className="line-clamp-2">{value}</span> : <span className="text-gray-300 group-hover:text-gray-400 italic">Add note…</span>}
    </button>
  );
}

function StatusSelect({ lead, onSave }: { lead: Lead; onSave: (id: string, status: string) => Promise<void> }) {
  const [saving, setSaving] = useState(false);
  const status = (lead.Status || 'New') as Status;

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSaving(true);
    await onSave(lead.id, e.target.value);
    setSaving(false);
  };

  return (
    <div className="relative">
      <select
        value={status}
        onChange={handleChange}
        disabled={saving}
        className={`text-xs font-semibold rounded-full border px-2.5 py-0.5 pr-5 appearance-none cursor-pointer focus:outline-none transition
          ${STATUS_STYLES[status]?.badge ?? 'bg-gray-100 text-gray-700 border-gray-200'}
          ${saving ? 'opacity-50' : ''}`}
      >
        {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
      <span className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-[10px] opacity-60">▾</span>
    </div>
  );
}

const FUNNEL: { status: Status; label: string; color: string; bg: string }[] = [
  { status: 'New',       label: 'New',       color: 'text-blue-600',  bg: 'bg-blue-50 border-blue-200' },
  { status: 'Contacted', label: 'Contacted', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
  { status: 'Converted', label: 'Converted', color: 'text-green-600', bg: 'bg-green-50 border-green-200' },
  { status: 'Lost',      label: 'Lost',      color: 'text-red-500',   bg: 'bg-red-50 border-red-200' },
];

// helpers
function startOfDay(d: Date) { const c = new Date(d); c.setHours(0,0,0,0); return c; }
function endOfDay(d: Date)   { const c = new Date(d); c.setHours(23,59,59,999); return c; }

function AdminDashboard() {
  const { signOut } = useAuth();
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<Status | 'All'>('All');
  const [datePreset, setDatePreset] = useState<DatePreset>('all');
  const [customFrom, setCustomFrom] = useState('');
  const [customTo, setCustomTo] = useState('');

  // Real-time Firestore listener
  useEffect(() => {
    const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(
      q,
      (snap) => {
        const docs: Lead[] = snap.docs.map((d) => {
          const data = d.data();
          const ca = data.createdAt;
          return {
            id:           d.id,
            Timestamp:    data.Timestamp ?? '',
            createdAt:    ca instanceof Timestamp ? ca.toDate() : new Date(ca ?? 0),
            'Full Name':  data['Full Name'] ?? '',
            Email:        data.Email ?? '',
            Phone:        data.Phone ?? '',
            Program:      data.Program ?? '',
            Destination:  data.Destination ?? '',
            Message:      data.Message ?? '',
            Status:       data.Status ?? 'New',
            Notes:        data.Notes ?? '',
          };
        });
        setLeads(docs);
        setLastUpdated(new Date());
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error('[admin] Firestore error:', err);
        setError(err.message);
        setLoading(false);
      }
    );
    return () => unsub();
  }, []);

  // Firestore update helper
  const patchLead = useCallback(async (id: string, patch: { Status?: string; Notes?: string }) => {
    await updateDoc(doc(db, 'leads', id), patch);
  }, []);

  const saveStatus = useCallback((id: string, status: string) => patchLead(id, { Status: status }), [patchLead]);
  const saveNotes  = useCallback((id: string, notes: string)  => patchLead(id, { Notes: notes }),  [patchLead]);

  // Date range
  function getDateRange(): { from: Date | null; to: Date | null } {
    const now = new Date();
    if (datePreset === 'today') return { from: startOfDay(now), to: endOfDay(now) };
    if (datePreset === 'yesterday') { const y = new Date(now); y.setDate(y.getDate()-1); return { from: startOfDay(y), to: endOfDay(y) }; }
    if (datePreset === 'last7') { const w = new Date(now); w.setDate(w.getDate()-6); return { from: startOfDay(w), to: endOfDay(now) }; }
    if (datePreset === 'custom') return {
      from: customFrom ? startOfDay(new Date(customFrom)) : null,
      to:   customTo   ? endOfDay(new Date(customTo))     : null,
    };
    return { from: null, to: null };
  }

  const filtered = leads.filter((l) => {
    const q = search.toLowerCase();
    const matchesSearch =
      l['Full Name']?.toLowerCase().includes(q) ||
      l.Email?.toLowerCase().includes(q) ||
      l.Phone?.includes(q) ||
      l.Program?.toLowerCase().includes(q) ||
      l.Destination?.toLowerCase().includes(q) ||
      l.Notes?.toLowerCase().includes(q);
    const matchesStatus = statusFilter === 'All' || (l.Status || 'New') === statusFilter;
    const { from, to } = getDateRange();
    let matchesDate = true;
    if (from || to) {
      const d = l.createdAt;
      if (!d) { matchesDate = false; } else {
        if (from && d < from) matchesDate = false;
        if (to   && d > to)   matchesDate = false;
      }
    }
    return matchesSearch && matchesStatus && matchesDate;
  });

  const total = leads.length;

  const funnelCounts = FUNNEL.reduce<Record<string, number>>((acc, f) => {
    acc[f.status] = leads.filter((l) => (l.Status || 'New') === f.status).length;
    return acc;
  }, {});

  const conversionRate = total > 0 ? Math.round((funnelCounts['Converted'] / total) * 100) : 0;

  // Excel export (client-side, filtered data)
  const handleExport = async () => {
    const { default: ExcelJS } = await import('exceljs');
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Leads');
    ws.columns = [
      { header: '#',           key: 'num',         width: 5  },
      { header: 'Timestamp',   key: 'Timestamp',   width: 20 },
      { header: 'Full Name',   key: 'FullName',    width: 22 },
      { header: 'Email',       key: 'Email',       width: 28 },
      { header: 'Phone',       key: 'Phone',       width: 16 },
      { header: 'Program',     key: 'Program',     width: 14 },
      { header: 'Destination', key: 'Destination', width: 14 },
      { header: 'Status',      key: 'Status',      width: 12 },
      { header: 'Notes',       key: 'Notes',       width: 35 },
    ];
    const headerRow = ws.getRow(1);
    headerRow.eachCell((cell) => {
      cell.fill = { type:'pattern', pattern:'solid', fgColor:{ argb:'FF1E3A5F' } };
      cell.font = { bold:true, color:{ argb:'FFFFFFFF' }, size:11 };
      cell.alignment = { vertical:'middle', horizontal:'center' };
    });
    headerRow.height = 20;
    const STATUS_COLORS: Record<string,string> = { New:'FFDBEAFE', Contacted:'FFFEF3C7', Converted:'FFD1FAE5', Lost:'FFFEE2E2' };
    filtered.forEach((lead, i) => {
      const row = ws.addRow({
        num: filtered.length - i, Timestamp: lead.Timestamp,
        FullName: lead['Full Name'], Email: lead.Email, Phone: lead.Phone,
        Program: lead.Program, Destination: lead.Destination,
        Status: lead.Status || 'New', Notes: lead.Notes,
      });
      const argb = STATUS_COLORS[lead.Status || 'New'] ?? 'FFFFFFFF';
      row.eachCell((cell) => { cell.fill = { type:'pattern', pattern:'solid', fgColor:{ argb } }; cell.alignment = { vertical:'middle', wrapText:true }; });
      row.height = 18;
    });
    ws.autoFilter = { from:'A1', to:'I1' };
    const buf  = await wb.xlsx.writeBuffer();
    const blob = new Blob([buf], { type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    const label = datePreset === 'today' ? 'today' : datePreset === 'yesterday' ? 'yesterday' : datePreset === 'last7' ? 'last7days' : datePreset === 'custom' ? `${customFrom}_to_${customTo}` : 'all';
    a.href = url;
    a.download = `eurotech-leads-${label}-${new Date().toISOString().split('T')[0]}.xlsx`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#1E3A5F] flex items-center justify-center">
              <span className="text-white font-bold text-sm">ET</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Eurotech Edu — Lead CRM</h1>
              <p className="text-xs text-gray-500">
                {lastUpdated ? `Last updated: ${lastUpdated.toLocaleTimeString('en-IN')} · Live via Firestore` : 'Connecting…'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs font-medium text-green-600">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Live
            </span>
            <button
              onClick={handleExport}
              className="px-3 py-1.5 rounded-lg border border-[#1E3A5F]/30 bg-[#1E3A5F] text-xs font-medium text-white hover:bg-[#1a3255] transition flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export Excel
            </button>
            <button
              onClick={async () => { await signOut(); router.replace('/login'); }}
              className="px-3 py-1.5 rounded-lg border border-red-200 bg-white text-xs font-medium text-red-600 hover:bg-red-50 transition flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-5">

        {/* Funnel Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 px-5 py-4">
            <p className="text-xs text-gray-500 font-medium">Total Leads</p>
            <p className="text-3xl font-bold text-[#1E3A5F] mt-1">{total}</p>
          </div>
          {FUNNEL.map((f) => (
            <button
              key={f.status}
              onClick={() => setStatusFilter(statusFilter === f.status ? 'All' : f.status)}
              className={`rounded-xl border px-5 py-4 text-left transition ${
                statusFilter === f.status ? f.bg + ' ring-2 ring-offset-1 ring-current' : 'bg-white border-gray-200 hover:' + f.bg
              }`}
            >
              <p className={`text-xs font-medium ${f.color}`}>{f.label}</p>
              <p className={`text-3xl font-bold mt-1 ${f.color}`}>{funnelCounts[f.status] ?? 0}</p>
            </button>
          ))}
        </div>

        {/* Conversion Rate Bar */}
        <div className="bg-white border border-gray-200 rounded-xl px-5 py-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-gray-600">Conversion Rate</p>
            <p className="text-sm font-bold text-green-600">{conversionRate}%</p>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden flex">
            {FUNNEL.map((f) => {
              const pct = total > 0 ? ((funnelCounts[f.status] ?? 0) / total) * 100 : 0;
              const colors: Record<string, string> = { New: 'bg-blue-400', Contacted: 'bg-amber-400', Converted: 'bg-green-500', Lost: 'bg-red-400' };
              return pct > 0 ? <div key={f.status} className={`${colors[f.status]} transition-all`} style={{ width: `${pct}%` }} title={`${f.status}: ${funnelCounts[f.status]}`} /> : null;
            })}
          </div>
          <div className="flex gap-4 mt-2">
            {FUNNEL.map((f) => {
              const dotColors: Record<string, string> = { New: 'bg-blue-400', Contacted: 'bg-amber-400', Converted: 'bg-green-500', Lost: 'bg-red-400' };
              return (
                <span key={f.status} className="flex items-center gap-1 text-xs text-gray-500">
                  <span className={`w-2 h-2 rounded-full ${dotColors[f.status]}`} />
                  {f.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3">
          {/* Date presets */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-gray-500 mr-1">Date:</span>
            {([
              { key: 'all',       label: 'All Time'    },
              { key: 'today',     label: 'Today'       },
              { key: 'yesterday', label: 'Yesterday'   },
              { key: 'last7',     label: 'Last 7 Days' },
              { key: 'custom',    label: 'Custom'      },
            ] as { key: DatePreset; label: string }[]).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setDatePreset(key)}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition ${
                  datePreset === key
                    ? 'bg-[#1E3A5F] text-white border-[#1E3A5F]'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#1E3A5F]/40'
                }`}
              >
                {label}
              </button>
            ))}
            {datePreset === 'custom' && (
              <div className="flex items-center gap-2 ml-1">
                <input type="date" value={customFrom} onChange={(e) => setCustomFrom(e.target.value)} className="text-xs border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/30" />
                <span className="text-xs text-gray-400">→</span>
                <input type="date" value={customTo}   onChange={(e) => setCustomTo(e.target.value)}   className="text-xs border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/30" />
              </div>
            )}
          </div>

          {/* Search + Status tabs */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by name, email, phone, program, notes…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/30 transition"
              />
            </div>
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              {(['All', ...STATUS_OPTIONS] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                    statusFilter === s ? 'bg-white text-[#1E3A5F] shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <svg className="animate-spin h-8 w-8 text-[#1E3A5F]" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-6 py-5 text-sm">⚠️ {error}</div>
        ) : filtered.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-xl px-6 py-16 text-center text-gray-400 text-sm">
            {search || statusFilter !== 'All' || datePreset !== 'all' ? 'No leads match your filters.' : 'No leads yet. Form submissions will appear here.'}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-left">
                    {['#', 'Timestamp', 'Name', 'Email', 'Phone', 'Program', 'Destination', 'Status', 'Notes'].map((h) => (
                      <th key={h} className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filtered.map((lead, i) => {
                    const status = (lead.Status || 'New') as Status;
                    const rowStyle = STATUS_STYLES[status]?.row ?? 'hover:bg-gray-50';
                    return (
                      <tr key={lead.id} className={`transition-colors ${rowStyle}`}>
                        <td className="px-4 py-3 text-gray-400 font-mono text-xs">{filtered.length - i}</td>
                        <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap font-mono">{lead.Timestamp}</td>
                        <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">{lead['Full Name']}</td>
                        <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                          <a href={`mailto:${lead.Email}`} className="hover:text-[#1E3A5F] hover:underline">{lead.Email}</a>
                        </td>
                        <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                          <a href={`tel:${lead.Phone}`} className="hover:text-[#1E3A5F] hover:underline">{lead.Phone}</a>
                        </td>
                        <td className="px-4 py-3"><ProgramBadge value={lead.Program} /></td>
                        <td className="px-4 py-3"><DestBadge value={lead.Destination} /></td>
                        <td className="px-4 py-3"><StatusSelect lead={lead} onSave={saveStatus} /></td>
                        <td className="px-4 py-3 w-48"><NotesCell lead={lead} onSave={saveNotes} /></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 border-t border-gray-100 text-xs text-gray-400">
              Showing {filtered.length} of {total} leads
              {statusFilter !== 'All' && ` · Status: ${statusFilter}`}
              {datePreset !== 'all' && ` · Date: ${datePreset === 'today' ? 'Today' : datePreset === 'yesterday' ? 'Yesterday' : datePreset === 'last7' ? 'Last 7 Days' : `${customFrom} → ${customTo}`}`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminPage() {
  return (
    <AuthGuard>
      <AdminDashboard />
    </AuthGuard>
  );
}
