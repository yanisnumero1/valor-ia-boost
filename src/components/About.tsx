const About = () => {
  return <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            À propos de <span className="text-gradient">ValorIA.ai</span>
          </h2>
          <div className="space-y-6 text-lg font-light text-muted-foreground leading-relaxed">
            <p>
              ValorIA est une startup française spécialisée dans l'intelligence artificielle appliquée à la productivité.
            </p>
            <p>Nous aidons les entreprises à automatiser leurs tâches, améliorer leur relation client,  profiter de la puissance de l'IA appliquée à leur métier et à se concentrer sur l'essentiel : la croissance.</p>
            <p>
              Notre mission est simple : rendre l'IA utile, accessible et orientée performance.
            </p>
            <p className="font-medium text-foreground">Chaque projet est conçu sur mesure, avec une approche humaine, pédagogique et des résultats mesurables.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;