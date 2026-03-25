import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import ProductCard from "@/components/ProductCard";
import productData from "@/data/products.json";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const [search, setSearch] = useState("");
  const [careFilter, setCareFilter] = useState("all");
  const [sunlightFilter, setSunlightFilter] = useState("all");

  const categories = productData.categories;

  const allProducts = useMemo(() => {
    return categories.flatMap((cat) => cat.products);
  }, []);

  const filteredProducts = useMemo(() => {
    let products = activeCategory === "all"
      ? allProducts
      : categories.find((c) => c.slug === activeCategory)?.products || [];

    if (search) {
      const q = search.toLowerCase();
      products = products.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.sub_category.toLowerCase().includes(q)
      );
    }

    if (careFilter !== "all") {
      products = products.filter((p) => p.care_level === careFilter);
    }

    if (sunlightFilter !== "all") {
      products = products.filter((p) => p.sunlight === sunlightFilter);
    }

    return products;
  }, [activeCategory, search, careFilter, sunlightFilter]);

  const careLevels = [...new Set(allProducts.map((p) => p.care_level).filter((c) => c !== "N/A"))];
  const sunlightLevels = [...new Set(allProducts.map((p) => p.sunlight).filter((s) => s !== "N/A"))];

  const clearFilters = () => {
    setSearch("");
    setCareFilter("all");
    setSunlightFilter("all");
    setSearchParams({});
  };

  const hasActiveFilters = search || careFilter !== "all" || sunlightFilter !== "all" || activeCategory !== "all";

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 section-padding">
        <div className="container-wide mx-auto">
          <div className="mb-10">
            <h1 className="section-title mb-2">Our Collection</h1>
            <p className="text-muted-foreground">Browse our curated selection of plants, pots, and gardening essentials.</p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSearchParams({})}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeCategory === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSearchParams({ category: cat.slug })}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeCategory === cat.slug ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search + filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="relative flex-1 min-w-[200px] max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search plants..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <select
              value={careFilter}
              onChange={(e) => setCareFilter(e.target.value)}
              className="px-4 py-2.5 rounded-xl bg-muted text-sm border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="all">All Care Levels</option>
              {careLevels.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <select
              value={sunlightFilter}
              onChange={(e) => setSunlightFilter(e.target.value)}
              className="px-4 py-2.5 rounded-xl bg-muted text-sm border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="all">All Sunlight</option>
              {sunlightLevels.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            {hasActiveFilters && (
              <button onClick={clearFilters} className="inline-flex items-center gap-1 px-4 py-2.5 rounded-xl text-sm text-destructive hover:bg-destructive/10 transition-colors">
                <X className="w-4 h-4" /> Clear
              </button>
            )}
          </div>

          {/* Results */}
          <p className="text-sm text-muted-foreground mb-6">{filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found</p>

          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Filter className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">No products match your filters.</p>
              <button onClick={clearFilters} className="cta-primary mt-4 text-sm">View All Products</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Products;
