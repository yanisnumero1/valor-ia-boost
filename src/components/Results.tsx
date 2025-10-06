import { TrendingUp, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const Results = () => {
  const results = [
    {
      icon: TrendingUp,
      stat: "+47%",
      description: "de productivité sur la gestion client.",
    },
    {
      icon: Clock,
      stat: "-65%",
      description: "des tâches manuelles en interne.",
    },
    {
      icon: DollarSign,
      stat: "×3",
      description: "ROI multiplié après 90 jours.",
    },
  ];

  return (
    <section id="resultats" className="py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Des résultats <span className="text-gradient">concrets, mesurables et rapides</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:glow-primary"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <result.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-5xl font-bold text-primary mb-4">{result.stat}</div>
              <p className="text-muted-foreground font-light">{result.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
          >
            Voir plus d'études de cas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Results;
