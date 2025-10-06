import { Button } from "@/components/ui/button";

const CTA = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent animate-glow" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Passez à l'action avec <span className="text-gradient">ValorIA</span>.
        </h2>
        <p className="text-xl font-light mb-12 max-w-2xl mx-auto text-muted-foreground">
          Planifiez un audit gratuit et découvrez comment l'IA peut transformer votre entreprise.
        </p>
        <Button
          size="lg"
          onClick={() => scrollToSection("contact")}
          className="bg-primary hover:bg-primary/90 text-primary-foreground glow-intense hover:glow-primary transition-all duration-300 font-semibold text-xl px-12 py-7"
        >
          Demander une démo
        </Button>
      </div>
    </section>
  );
};

export default CTA;
