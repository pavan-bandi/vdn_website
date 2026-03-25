import { MessageCircle } from "lucide-react";
import config from "@/data/config.json";

const WhatsAppFab = () => {
  return (
    <a
      href={config.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:scale-110 transition-transform"
      style={{ background: "hsl(142, 70%, 45%)" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppFab;
