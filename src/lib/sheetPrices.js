// Lee precios directo desde Google Sheets, sin backend.
// Requiere que la planilla esté compartida como "Cualquier persona con el
// enlace puede ver" (Compartir > Acceso general > Lector).

const SPREADSHEET_ID = "1HfL8TI_CUOZAHxj3W-RFIFpF0LtfiOfMwYcIzRf2Ccc";
// Nombres de las pestañas (hojas) a leer, una por categoría.
const SHEETS = ["res", "pollo", "cerdo", "achuras", "extras"];

function parseCsvLine(line) {
  const cells = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (inQuotes) {
      if (char === '"') {
        if (line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      cells.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  cells.push(current);
  return cells;
}

async function fetchSheetTab(sheetName) {
  const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
  const res = await fetch(url);
  if (!res.ok) return {};

  const text = await res.text();
  const prices = {};
  // Fila 1 = encabezados, los datos arrancan en la fila 2.
  const lines = text.split(/\r?\n/).slice(1);
  for (const line of lines) {
    if (!line.trim()) continue;
    const [rawId, rawPrice] = parseCsvLine(line);
    const id = (rawId || "").trim();
    // Acepta "16900", "$16.900", "16.900,00" → número.
    const cleaned = (rawPrice || "").replace(/[^\d]/g, "");
    const price = Number(cleaned);
    if (id && !isNaN(price) && price > 0) {
      prices[id] = price;
    }
  }
  return prices;
}

export async function fetchSheetPrices() {
  const results = await Promise.allSettled(SHEETS.map(fetchSheetTab));
  const prices = {};
  for (const result of results) {
    if (result.status === "fulfilled") {
      Object.assign(prices, result.value);
    }
  }
  return prices;
}
