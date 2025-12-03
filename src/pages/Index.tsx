import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";
import Contract from "@/components/sections/Contract";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Pricing />
      <Services />
      <Contract />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
