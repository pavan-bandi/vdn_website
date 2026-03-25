// Excel to JSON Conversion Script for VDN Landscapers
// Usage: node scripts/excel-to-json.js <path-to-excel-file>
//
// Requirements: npm install xlsx
// Output: src/data/products.json
//
// Excel Format:
// - Each SHEET = one product category
// - Headers: Product_ID | Category | Sub_Category | Name | Title | Description | Size | Price (₹) | Image | Care_Level | Watering | Sunlight

const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

const INPUT_FILE = process.argv[2] || "products.xlsx";
const OUTPUT_FILE = path.join(__dirname, "..", "src", "data", "products.json");

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[&]/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeKey(key) {
  return key
    .toLowerCase()
    .replace(/[()₹]/g, "")
    .replace(/\s+/g, "_")
    .trim();
}

function getCategoryFolder(category) {
  const map = {
    "indoor plants": "indoor",
    "outdoor plants": "outdoor",
    "pots & planters": "pots",
    "pots": "pots",
    "fertilizers & soil": "fertilizers",
    "fertilizers": "fertilizers",
    "soil": "soil",
  };
  return map[category.toLowerCase()] || slugify(category);
}

function main() {
  if (!fs.existsSync(INPUT_FILE)) {
    console.error(`Error: File not found: ${INPUT_FILE}`);
    console.log("Usage: node scripts/excel-to-json.js <path-to-excel-file>");
    process.exit(1);
  }

  const workbook = XLSX.readFile(INPUT_FILE);
  const categories = [];

  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet);

    if (rows.length === 0) continue;

    const products = rows.map((row) => {
      const normalized = {};
      for (const [key, value] of Object.entries(row)) {
        normalized[normalizeKey(key)] = String(value).trim();
      }

      const categoryFolder = getCategoryFolder(normalized.category || sheetName);
      const imageName = normalized.image || "";
      const imagePath = imageName
        ? `/images/products/${categoryFolder}/${imageName}`
        : "/placeholder.svg";

      return {
        id: normalized.product_id || "",
        name: normalized.name || "",
        title: normalized.title || "",
        description: normalized.description || "",
        category: normalized.category || sheetName,
        sub_category: normalized.sub_category || "",
        size: normalized.size || "",
        price: normalized.price || "",
        image: imagePath,
        care_level: normalized.care_level || "N/A",
        watering: normalized.watering || "N/A",
        sunlight: normalized.sunlight || "N/A",
      };
    });

    categories.push({
      name: sheetName,
      slug: slugify(sheetName),
      products,
    });
  }

  const output = { categories };
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
  console.log(`✅ Successfully converted ${INPUT_FILE} → ${OUTPUT_FILE}`);
  console.log(`   ${categories.length} categories, ${categories.reduce((a, c) => a + c.products.length, 0)} total products`);
}

main();
