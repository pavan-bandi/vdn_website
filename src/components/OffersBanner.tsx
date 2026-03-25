import { MessageCircle, Sparkles } from "lucide-react";
import config from "@/data/config.json";

const OffersBanner = () => {
  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="container-wide mx-auto rounded-3xl overflow-hidden relative py-16 px-8 md:px-16 text-center" style={{ background: "var(--gradient-earth)" }}>
        <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 70% 30%, hsl(90,50%,70%), transparent 50%)" }} />
        <div className="relative z-10">
          <Sparkles className="w-8 h-8 text-primary-foreground/80 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-display mb-4">
            Spring Season Sale — Up to 30% Off
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Refresh your garden with our curated spring collection. Premium plants, pots, and landscaping services at special prices.
          </p>
          <a href={config.whatsapp} target="_blank" rel="noopener noreferrer" className="cta-warm text-base px-8 py-4">
            <MessageCircle className="w-5 h-5" />
            Claim Offer on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default OffersBanner;
