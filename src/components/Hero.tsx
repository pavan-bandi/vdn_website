import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-garden.jpg";
import config from "@/data/config.json";

const Hero = () => {
  return (
    <section className="relative min-h-screen sm:min-h-[90vh] flex items-center overflow-hidden pb-24 sm:pb-32">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Beautiful landscaped garden" className="w-full h-full object-cover" loading="eager" decoding="sync" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(152,45%,12%,0.82), hsla(35,30%,20%,0.55))" }} />
      </div>

      <div className="relative z-10 container-wide mx-auto px-4 lg:px-8 py-16 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/20 mb-4 sm:mb-6"
          >
            Premium Landscaping & Nursery
          </motion.span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
            {config.tagline.split("–")[0]}
            <span className="italic" style={{ color: "hsl(90, 60%, 70%)" }}>
              {config.tagline.includes("–") ? `– ${config.tagline.split("–")[1].trim()}` : ""}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 sm:mb-10 max-w-xl font-light leading-relaxed">
            From lush indoor sanctuaries to grand outdoor landscapes — we design, build, and nurture green spaces that inspire.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href={config.whatsapp} target="_blank" rel="noopener noreferrer" className="cta-warm text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
              <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
              Get Free Consultation
            </a>
            <Link to="/products" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 transition-all text-sm sm:text-base">
              Explore Plants
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border">
        <div className="container-wide mx-auto px-4 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
            {[
              { value: `${config.stats.projects_completed}+`, label: "Projects Completed" },
              { value: `${config.stats.years_experience}+`, label: "Years Experience" },
              { value: `${config.stats.team_members}+`, label: "Skilled Team" },
              { value: `${(config.stats.plants_delivered / 1000).toFixed(0)}K+`, label: "Plants Delivered" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-display">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
