import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-neural-network.jpg";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      
      <div className="container mx-auto px-6 relative z-10 text-center fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Prêt à adopter l'IA ?
        </h1>
        
        <p className="text-xl md:text-2xl font-light mb-4 max-w-3xl mx-auto text-muted-foreground">Mettons ensemble tout le potentiel de l'intelligence artificielle à votre service. Efficacement.</p>
        
        
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary hover:glow-intense transition-all duration-300 font-semibold text-lg px-8 py-6">
            Demander une démo
          </Button>
          <button onClick={() => scrollToSection("solutions")} className="text-foreground hover:text-primary transition-colors font-light text-lg underline underline-offset-4">
            Découvrir nos solutions
          </button>
        </div>
      </div>
    </section>;
};
export default Hero;