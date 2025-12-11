/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { getSheetData } from "../../lib/sheets";

// 1️⃣ Valores DEFAULT (fallback seguro)
// const defaultConfig = {
//   site_name: "Biomedical Default",
//   nav_home: "Inicio",
//   nav_services: "Servicios",
//   nav_innovacion: "Innovación",
//   nav_products: "Productos",
//   nav_contact: "Contacto",
//   nav_button: "Consultar",
// };

// // 2️⃣ Convierte los valores del sheet en un objeto key/value
// function sheetValuesToObject(values: string[][]) {
//   const obj: Record<string, string> = {};

//   // Skip header
//   for (let i = 1; i < values.length; i++) {
//     const [key, value] = values[i];
//     if (!key) continue;
//     obj[key] = value ?? "";
//   }

//   return obj;
// }

// // 3️⃣ Mezcla valores del sheet con los defaults
// function mergeWithDefaults(sheetConfig: Record<string, string>) {
//   return {
//     ...defaultConfig,
//     ...sheetConfig, // lo del sheet tiene prioridad
//   };
// }

export async function GET() {
  try {
    // Obtener los datos del sheet
    const values = await getSheetData(
      process.env.GOOGLE_SHEETS_DOCUMENT_ID!,
      "General!A1:Z999"
    );

    const rows = values.values;

    if (!rows || rows.length === 0) {
      return NextResponse.json({
        ok: false,
        source: "fallback",
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

    console.log(result);

    // // convertir -> mezclar -> enviar
    // const sheetConfig = sheetValuesToObject(values.values as string[][]);
    // const finalConfig = mergeWithDefaults(sheetConfig);

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
