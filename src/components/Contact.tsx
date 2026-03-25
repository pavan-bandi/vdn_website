import { Phone, Mail, MapPin, MessageCircle, Instagram, ExternalLink } from "lucide-react";
import config from "@/data/config.json";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-wide mx-auto">
        <div className="text-center mb-16">
          <p className="section-subtitle">Get in Touch</p>
          <h2 className="section-title">Contact Us</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-[400px] border border-border">
            <iframe
              src={config.google_map_embed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VDN Landscapes Location"
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-earth)" }}>
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                <a href={`tel:${config.phone}`} className="text-muted-foreground hover:text-primary transition-colors block">
                  {config.phone}
                </a>
                <a href={`tel:${config.phone2}`} className="text-muted-foreground hover:text-primary transition-colors block">
                  {config.phone2}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-earth)" }}>
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                <a href={config.whatsapp} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Chat with us instantly
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-earth)" }}>
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a href={`mailto:${config.email}`} className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">
                  {config.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-earth)" }}>
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Corporate Office</h3>
                <p className="text-muted-foreground text-sm">{config.address}</p>
                <a href={config.google_map_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary text-sm mt-1 hover:underline">
                  <ExternalLink className="w-3 h-3" /> View on Google Maps
                </a>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <a href={config.whatsapp} target="_blank" rel="noopener noreferrer" className="cta-primary text-base px-8 py-4 mt-2 w-fit">
              <MessageCircle className="w-5 h-5" />
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
