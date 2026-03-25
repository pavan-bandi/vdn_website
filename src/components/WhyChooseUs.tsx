import { motion } from "framer-motion";
import { Shield, Award, Truck, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Award, title: "Expert Horticulturists", desc: "Our team includes certified horticulturists with decades of experience in Indian climate gardening." },
  { icon: Shield, title: "Quality Guarantee", desc: "Every plant comes with a health guarantee. We replace any plant that doesn't thrive within 30 days." },
  { icon: Truck, title: "Pan-India Delivery", desc: "Careful packaging and reliable delivery across major cities. Plants arrive fresh and healthy." },
  { icon: HeartHandshake, title: "After-Sale Support", desc: "Free care guidance and maintenance tips. We're just a WhatsApp message away for any plant queries." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ background: "radial-gradient(circle at 30% 50%, hsl(152,45%,28%), transparent 70%)" }} />
      <div className="container-narrow mx-auto relative">
        <div className="text-center mb-16">
          <p className="section-subtitle">Why VDN</p>
          <h2 className="section-title">Why Choose Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
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
