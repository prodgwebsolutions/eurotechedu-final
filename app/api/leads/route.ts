import { NextResponse } from 'next/server';
import ExcelJS from 'exceljs';
import path from 'path';
import fs from 'fs';

const FILE_PATH = path.join(process.cwd(), 'leads.xlsx');

export async function GET() {
  try {
    if (!fs.existsSync(FILE_PATH)) {
      return NextResponse.json({ leads: [], total: 0 }, { status: 200 });
    }

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(FILE_PATH);

    const worksheet = workbook.getWorksheet('Leads');
    if (!worksheet) {
      return NextResponse.json({ leads: [], total: 0 }, { status: 200 });
    }

    const leads: Record<string, string>[] = [];
    let headers: string[] = [];

    worksheet.eachRow((row, rowIndex) => {
      const values = (row.values as (string | undefined)[]).slice(1);
      if (rowIndex === 1) {
        headers = values.map((v) => String(v ?? ''));
      } else {
        const entry: Record<string, string> = {};
        headers.forEach((h, i) => {
          entry[h] = String(values[i] ?? '');
        });
        // Include the actual Excel row number so PATCH can identify the row
        entry['_rowNumber'] = String(rowIndex);
        // Default Status to "New" for old rows that predate this column
        if (!entry['Status'] || entry['Status'] === 'undefined') {
          entry['Status'] = 'New';
        }
        if (!entry['Notes'] || entry['Notes'] === 'undefined') {
          entry['Notes'] = '';
        }
        leads.push(entry);
      }
    });

    // Return newest first
    return NextResponse.json(
      { leads: leads.reverse(), total: leads.length },
      {
        status: 200,
        headers: { 'Cache-Control': 'no-store' },
      }
    );
  } catch (error) {
    console.error('[GET /api/leads] Error:', error);
    return NextResponse.json({ error: 'Failed to read leads' }, { status: 500 });
  }
}
