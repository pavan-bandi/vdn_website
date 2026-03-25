import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CategoryShowcase from "@/components/CategoryShowcase";
import OffersBanner from "@/components/OffersBanner";
import Projects from "@/components/Projects";

import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <CategoryShowcase />
      <OffersBanner />
      <Projects />
      
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
