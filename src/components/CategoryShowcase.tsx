import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import plantsImg from "@/assets/plants-category.jpg";
import outdoorImg from "@/assets/outdoor-garden.jpg";
import seedsImg from "@/assets/seeds-category.jpg";
import potsImg from "@/assets/pots-display.jpg";
import productData from "@/data/products.json";

const categoryImages: Record<string, string> = {
  plants: plantsImg,
  "popular-plants": outdoorImg,
  seeds: seedsImg,
  "potsandplanters": potsImg,
};

const CategoryShowcase = () => {
  const categories = productData.categories.map((cat) => ({
    name: cat.name,
    slug: cat.slug,
    count: `${cat.products.length}+ Items`,
    image: categoryImages[cat.slug] || plantsImg,
  }));

  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <div className="text-center mb-16">
          <p className="section-subtitle">Our Collection</p>
          <h2 className="section-title">Shop by Category</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/products?category=${cat.slug}`}
                className="group block relative rounded-2xl overflow-hidden aspect-[3/4]"
              >
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary-foreground/70 text-xs font-medium uppercase tracking-wider mb-1">{cat.count}</p>
                  <h3 className="text-xl font-bold text-primary-foreground font-display mb-2">{cat.name}</h3>
                  <span className="inline-flex items-center gap-1 text-sm text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                    Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
