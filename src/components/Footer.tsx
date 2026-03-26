import { Link } from "react-router-dom";
import { Leaf, Instagram } from "lucide-react";
import config from "@/data/config.json";
import productData from "@/data/products.json";

const Footer = () => {
  const categories = productData.categories;

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6" />
              <span className="text-xl font-bold font-display">{config.business_name}</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              {config.tagline}. Premium landscaping and nursery services across India.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/products?category=${cat.slug}`} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Products", "Services", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a href={link === "Home" ? "/" : link === "Products" ? "/products" : `/#${link.toLowerCase()}`} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>{config.phone}</li>
              <li>{config.phone2}</li>
              <li className="break-all">{config.email}</li>
              <li className="font-semibold text-primary-foreground mt-3 text-xs">CORPORATE OFFICE</li>
              <li className="text-xs">{config.corporate_office}</li>
              <li className="font-semibold text-primary-foreground mt-2 text-xs">BUSINESS ADDRESS</li>
              <li className="text-xs">{config.business_address}</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} {config.business_name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
