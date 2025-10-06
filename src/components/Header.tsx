import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-foreground">Valor</span>
            <span className="text-primary">IA</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-light hover:text-primary transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("solutions")}
              className="text-sm font-light hover:text-primary transition-colors"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("methode")}
              className="text-sm font-light hover:text-primary transition-colors"
            >
              Méthode
            </button>
            <button
              onClick={() => scrollToSection("resultats")}
              className="text-sm font-light hover:text-primary transition-colors"
            >
              Études de cas
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-light hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary hover:glow-intense transition-all duration-300 font-medium"
          >
            Demander une démo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
