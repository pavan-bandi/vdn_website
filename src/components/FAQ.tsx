import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Do you deliver plants across India?", a: "Yes! We deliver healthy plants pan-India with careful packaging. Delivery charges vary by location and order size." },
  { q: "How do I maintain my landscaped garden?", a: "We offer annual maintenance contracts. Our team visits regularly for pruning, fertilizing, pest control, and seasonal planting." },
  { q: "Can I visit your nursery?", a: "Absolutely! Our nursery is open 7 days a week from 8 AM to 6 PM. Walk-ins are welcome, or book a guided tour via WhatsApp." },
  { q: "What is the minimum order for landscaping projects?", a: "We take on projects of all sizes — from balcony gardens to multi-acre estates. Contact us for a free consultation and quote." },
  { q: "Do you provide plant care guidance?", a: "Yes, every plant purchase comes with a care card. Our team is also available on WhatsApp for ongoing plant care support." },
  { q: "How do I place a bulk order for my office or event?", a: "For bulk and corporate orders, reach out via WhatsApp or email. We offer special pricing and customized plant selections." },
];

const FAQ = () => {
  return (
    <section className="section-padding" style={{ background: "var(--gradient-sand)" }}>
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="section-subtitle">Questions?</p>
          <h2 className="section-title">Frequently Asked</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-none">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
