import { motion } from "framer-motion";
import { TreePine, Flower2, Building2, Droplets, Sun, Palette } from "lucide-react";

const services = [
  { icon: TreePine, title: "Landscape Design", desc: "Custom garden designs that blend aesthetics with functionality. From concept to completion." },
  { icon: Flower2, title: "Nursery & Plants", desc: "Curated collection of premium indoor and outdoor plants, pots, and gardening essentials." },
  { icon: Building2, title: "Commercial Landscaping", desc: "Transform office spaces, resorts, and corporate campuses with biophilic green design." },
  { icon: Droplets, title: "Irrigation Systems", desc: "Smart automated irrigation setups for efficient water management and plant health." },
  { icon: Sun, title: "Garden Maintenance", desc: "Regular upkeep services to keep your garden lush, healthy, and beautiful year-round." },
  { icon: Palette, title: "Terrace & Balcony Gardens", desc: "Maximize small spaces with vertical gardens, planters, and creative green solutions." },
];

const Services = () => {
  return (
    <section id="services" className="section-padding" style={{ background: "var(--gradient-sand)" }}>
      <div className="container-wide mx-auto">
        <div className="text-center mb-16">
          <p className="section-subtitle">What We Do</p>
          <h2 className="section-title">Our Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--gradient-earth)" }}>
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-display">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
