import { Search, Cpu, Rocket, TrendingUp } from "lucide-react";

const Method = () => {
  const steps = [
    {
      icon: Search,
      title: "Analyse & Diagnostic",
      description: "Nous identifions les processus à fort potentiel d'automatisation.",
      number: "01",
    },
    {
      icon: Cpu,
      title: "Conception IA",
      description: "Création et entraînement de vos agents IA personnalisés.",
      number: "02",
    },
    {
      icon: Rocket,
      title: "Déploiement",
      description: "Intégration fluide dans vos systèmes existants.",
      number: "03",
    },
    {
      icon: TrendingUp,
      title: "Optimisation continue",
      description: "Mesure des gains, ajustements et reporting.",
      number: "04",
    },
  ];

  return (
    <section id="methode" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Notre approche, <span className="text-gradient">simple et orientée résultats</span>.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:glow-primary"
              >
                <div className="absolute top-6 right-6 text-6xl font-bold text-primary/10">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
