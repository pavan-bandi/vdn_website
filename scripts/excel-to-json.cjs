// Excel to JSON Conversion Script for VDN Landscapes
// Usage: node scripts/excel-to-json.js <path-to-excel-file>
//
// Requirements: npm install xlsx
// Output: src/data/products.json
//
// Excel Format:
// - Each SHEET = one product category group
// - Plant Catalog headers: Product_ID | Category | Sub_Category | Name | Title | Description | Care_Level | Watering | Sunlight
// - Seeds headers: Seed_ID | Category | Sub_Category | Name | Title | Description | Care_Level | Watering | Sunlight
// - Pots headers: Pot_ID | Category | Sub_Category | Name | Title | Description
// - Planters headers: Planters_ID | Category | Sub_Category | Name | Title | Description
//
// IMAGE CONVENTION:
// Product images are stored in: public/images/products/<category-slug>/<product-name-slug>.jpg
// The script auto-generates the image path from the product name.

const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

const INPUT_FILE = process.argv[2] || "plant_catalog_main.xlsx";
const OUTPUT_FILE = path.join(__dirname, "..", "src", "data", "products.json");
const IMAGES_DIR = path.join(__dirname, "..", "public", "images", "products");

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[&]/g, "and")
    .replace(/[()₹'"]/g, "")
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

function getCategorySlug(category) {
  return slugify(category);
}

function main() {
  if (!fs.existsSync(INPUT_FILE)) {
    console.error(`Error: File not found: ${INPUT_FILE}`);
    console.log("Usage: node scripts/excel-to-json.js <path-to-excel-file>");
    process.exit(1);
  }

  const workbook = XLSX.readFile(INPUT_FILE);
  const categories = [];

  // Sheet name mapping to top-level category names
  const sheetNameMap = {
    "Plant Catalog": "Plants",
    "Seeds Catalog": "Seeds",
    "Seeds catalog": "Seeds",
    "Pots Catalog": "Pots",
    "Planters Catalog": "Planters",
    "Planters catalog": "Planters",
  };

  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet);
    if (rows.length === 0) continue;

    const topName = sheetNameMap[sheetName] || sheetName;
    const topSlug = slugify(topName);

    // Create image directory
    const imgDir = path.join(IMAGES_DIR, topSlug);
    if (!fs.existsSync(imgDir)) {
      fs.mkdirSync(imgDir, { recursive: true });
    }

    const products = rows.map((row) => {
      const normalized = {};
      for (const [key, value] of Object.entries(row)) {
        normalized[normalizeKey(key)] = String(value).trim();
      }

      const id = normalized.product_id || normalized.seed_id || normalized.pot_id || normalized.planters_id || "";
      const name = normalized.name || "";
      const nameSlug = slugify(name);
      const subCat = normalized.sub_category || "";
      const subCatSlug = subCat ? slugify(subCat) : "";
      const imagePath = subCatSlug
        ? `/images/products/${topSlug}/${subCatSlug}/${nameSlug}.jpg`
        : `/images/products/${topSlug}/${nameSlug}.jpg`;

      return {
        id,
        name,
        title: normalized.title || "",
        description: normalized.description || "",
        category: normalized.category || topName,
        sub_category: normalized.sub_category || "",
        size: normalized.size || "",
        price: "",
        image: imagePath,
        care_level: normalized.care_level || "N/A",
        watering: normalized.watering || "N/A",
        sunlight: normalized.sunlight || "N/A",
      };
    });

    categories.push({
      name: topName,
      slug: topSlug,
      products,
    });

    // Log sub-categories found
    const subCats = [...new Set(products.map((p) => p.sub_category).filter(Boolean))];
    console.log(`  Sheet "${sheetName}" → "${topName}" (${products.length} products)`);
    console.log(`    Sub-categories: ${subCats.join(", ")}`);
  }

  const output = { categories };
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
  console.log(`\n✅ Successfully converted ${INPUT_FILE} → ${OUTPUT_FILE}`);
  console.log(`   ${categories.length} categories, ${categories.reduce((a, c) => a + c.products.length, 0)} total products`);

  // Print image placeholder summary
  console.log("\n📁 Image folders created:");
  for (const cat of categories) {
    const dir = path.join(IMAGES_DIR, cat.slug);
    console.log(`   ${dir}/ (${cat.products.length} images needed)`);
    console.log(`   Image naming: <product-name-slug>.jpg`);
    console.log(`   Example: ${slugify(cat.products[0]?.name || "example")}.jpg`);
  }
}

main();
