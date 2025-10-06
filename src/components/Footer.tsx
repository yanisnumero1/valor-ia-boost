const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-foreground">Valor</span>
            <span className="text-primary">IA</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
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
              Cas clients
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-light hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center space-y-2">
          <p className="text-sm text-muted-foreground font-light">
            © 2025 ValorIA.ai — L'IA qui crée de la valeur.
          </p>
          <p className="text-sm text-primary font-medium">Made in France 🇫🇷</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
