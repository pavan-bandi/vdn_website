import { motion } from "framer-motion";
import { Shield, Award, Truck, HeartHandshake, Leaf, DollarSign } from "lucide-react";

const reasons = [
  { icon: Award, title: "Experienced Team", desc: "20+ years of expertise with a 50+ strong skilled team delivering quality landscaping across Hyderabad and beyond." },
  { icon: Shield, title: "Customized Designs", desc: "Every project is tailored to your space, lifestyle, and budget — no cookie-cutter solutions." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Premium landscaping doesn't have to break the bank. Competitive rates with transparent quotes." },
  { icon: Leaf, title: "Eco-Friendly Solutions", desc: "Sustainable practices, native plants, and water-efficient systems for greener, healthier landscapes." },
  { icon: Truck, title: "End-to-End Service", desc: "From design consultation to installation and ongoing maintenance — we handle it all." },
  { icon: HeartHandshake, title: "High-Quality Materials", desc: "Only the finest plants, soils, and materials sourced from trusted suppliers across India." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ background: "radial-gradient(circle at 30% 50%, hsl(152,45%,28%), transparent 70%)" }} />
      <div className="container-narrow mx-auto relative">
        <div className="text-center mb-16">
          <p className="section-subtitle">Why VDN</p>
          <h2 className="section-title">Why We Are Different</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5"
            >
              <div className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center" style={{ background: "var(--gradient-earth)" }}>
                <r.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground font-display mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
