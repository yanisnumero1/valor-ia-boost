import { Clock, Zap, TrendingDown } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: "Perte de temps",
      description: "Heures perdues sur des tâches répétitives",
    },
    {
      icon: Zap,
      title: "Process contreproductif",
      description: "Opportunités manquées par manque d'efficacité",
    },
    {
      icon: TrendingDown,
      title: "ROI en baisse",
      description: "Productivité limitée par des processus manuels",
    },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vos processus vous <span className="text-gradient">ralentissent</span>.
          </h2>
          <p className="text-lg font-light max-w-3xl mx-auto text-muted-foreground">
            Chaque semaine, vos équipes passent des heures sur des tâches répétitives à faible valeur ajoutée. 
            Elles peuvent manquer des opportunités et perdre en productivité. Effet cumulé garanti. 
            ValorIA identifie ces points de friction et les transforme en leviers de performance automatisés.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:glow-primary"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <problem.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground font-light">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
