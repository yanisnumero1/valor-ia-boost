import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solutions from "@/components/Solutions";
import Method from "@/components/Method";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Problem />
      <Solutions />
      <Method />
      <Results />
      <Testimonials />
      <CTA />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
