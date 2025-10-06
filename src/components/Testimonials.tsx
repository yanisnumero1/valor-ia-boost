import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "ValorIA a automatisé 80 % de nos tâches administratives. Le retour sur investissement a été immédiat.",
      author: "Julien R.",
      role: "CEO d'une agence marketing",
    },
    {
      quote:
        "Nos leads sont désormais qualifiés automatiquement. On a doublé notre taux de conversion.",
      author: "Sarah M.",
      role: "Directrice commerciale",
    },
    {
      quote:
        "Un service client disponible 24/7, sans embauches supplémentaires. Bluffant.",
      author: "Lucas T.",
      role: "E-commerce manager",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ce que disent <span className="text-gradient">nos clients</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:glow-primary relative"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-foreground font-light leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
