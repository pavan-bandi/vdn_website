import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What areas do you serve?",
    answer: "We provide landscaping services across Hyderabad and surrounding areas. Contact us for specific location availability."
  },
  {
    id: 2,
    question: "How often should I water my garden?",
    answer: "Watering frequency depends on the plant type, season, and soil conditions. Most plants need watering 2-3 times a week in summer and 1-2 times in winter. Our drip irrigation systems optimize this automatically."
  },
  {
    id: 3,
    question: "Do you provide maintenance contracts?",
    answer: "Yes, we offer flexible monthly, quarterly, and annual maintenance packages tailored to your garden's needs."
  },
  {
    id: 4,
    question: "What's the best time to start a garden?",
    answer: "Spring and monsoon are ideal times to plant in Hyderabad. However, with proper care, gardens can thrive year-round. Our team can advise on seasonal planting."
  },
  {
    id: 5,
    question: "Can you work with small balcony spaces?",
    answer: "Absolutely! We specialize in terrace and balcony gardens using vertical solutions, planters, and space-efficient designs."
  },
  {
    id: 6,
    question: "How much does a landscape design cost?",
    answer: "Design costs vary based on space size and complexity. We offer free consultations to assess your property and provide a customized quote."
  }
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers to common questions about our services and garden care.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-green-500 transition-colors"
            >
              <button
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-green-600 transition-transform ${open === faq.id ? "rotate-180" : ""}`}
                />
              </button>
              
              {open === faq.id && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
