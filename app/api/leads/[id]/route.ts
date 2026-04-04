import { NextRequest, NextResponse } from 'next/server';
import ExcelJS from 'exceljs';
import path from 'path';
import fs from 'fs';

const FILE_PATH = path.join(process.cwd(), 'leads.xlsx');

// PATCH /api/leads/:rowNumber  { status?, notes? }
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const rowNumber = parseInt(id, 10);

    if (isNaN(rowNumber) || rowNumber < 2) {
      return NextResponse.json({ error: 'Invalid row number' }, { status: 400 });
    }

    if (!fs.existsSync(FILE_PATH)) {
      return NextResponse.json({ error: 'No leads file found' }, { status: 404 });
    }

    const body = await req.json();
    const { status, notes } = body as { status?: string; notes?: string };

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(FILE_PATH);

    const worksheet = workbook.getWorksheet('Leads');
    if (!worksheet) {
      return NextResponse.json({ error: 'Leads sheet not found' }, { status: 404 });
    }

    // Read headers from row 1 to find column indices
    const headerRow = worksheet.getRow(1);
    const headerValues = (headerRow.values as (string | undefined)[]).slice(1);
    const statusCol = headerValues.indexOf('Status') + 1;
    const notesCol = headerValues.indexOf('Notes') + 1;

    const row = worksheet.getRow(rowNumber);

    if (status !== undefined && statusCol > 0) {
      row.getCell(statusCol).value = status;
    } else if (status !== undefined) {
      // Status column doesn't exist yet — append it
      const newCol = headerValues.length + 1;
      headerRow.getCell(newCol).value = 'Status';
      headerRow.getCell(newCol).font = { bold: true, color: { argb: 'FFFFFFFF' } };
      headerRow.getCell(newCol).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E3A5F' } };
      headerRow.commit();
      row.getCell(newCol).value = status;
    }

    if (notes !== undefined && notesCol > 0) {
      row.getCell(notesCol).value = notes;
    } else if (notes !== undefined) {
      const newCol = headerValues.length + (statusCol > 0 ? 1 : 2);
      headerRow.getCell(newCol).value = 'Notes';
      headerRow.commit();
      row.getCell(newCol).value = notes;
    }

    row.commit();
    await workbook.xlsx.writeFile(FILE_PATH);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('[PATCH /api/leads/:id] Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
