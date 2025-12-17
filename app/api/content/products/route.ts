/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { getSheetData } from "../../lib/sheets";

export async function GET() {
  try {
    // Obtener los datos del sheet
    const values = await getSheetData(
      process.env.GOOGLE_SHEETS_DOCUMENT_ID!,
      "Productos!A1:Z999"
    );

    const rows = values.values;

    if (!rows || rows.length === 0) {
      return NextResponse.json({
        ok: false,
        source: "google-sheets",
        data: {},
      });
    }

    const [header, ...dataRows] = rows;

    const result: any = {};

    dataRows.forEach((row: string[]) => {
      const rowObj: any = {};

      header.forEach((key: string, i: number) => {
        rowObj[key] = row[i] ?? "";
      });

      const { page, section, key, value } = rowObj;

      if (!result[page]) result[page] = {};
      if (!result[page][section]) result[page][section] = {};

      result[page][section][key] = value;
    });

    return NextResponse.json({
      ok: true,
      source: "google-sheets",
      data: result,
    });
  } catch (error) {
    console.error("❌ Sheets error, sending fallback:", error);

    // fallback 100% seguro
    return NextResponse.json({
      ok: false,
      source: "fallback",
      data: {},
    });
  }
}
