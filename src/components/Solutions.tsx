import { Phone, MessageSquare, Workflow, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  const solutions = [
    {
      icon: Phone,
      title: "Agents Vocaux",
      description:
        "Des assistants vocaux capables de gérer la prise de rendez-vous, les demandes d'informations et la qualification des leads.",
      features: [
        "Fonctionnent 24/7 sur téléphone ou site web",
        "Ton naturel, voix humaine, réponses contextuelles",
        "Intégrations variées possibles (HubSpot, Pipedrive, Suite Google, Airtable…)",
      ],
    },
    {
      icon: MessageSquare,
      title: "Agents Intelligents",
      description:
        "Améliorez votre relation client grâce à des agents capables de traiter automatiquement les demandes entrantes et d'offrir une assistance instantanée.",
      features: [
        "Gestion automatique des e-mails, demande d'infos en temps réel",
        "Résolution en autonomie des questions récurrentes",
        "Expérience client fluide et sans attente → transformation de leads automatisée",
      ],
    },
    {
      icon: Workflow,
      title: "Automatisations Avancées",
      description:
        "Libérez vos équipes des tâches chronophages avec des automatisations sur mesure.",
      features: [
        "Prise de rendez-vous automatique",
        "Génération et envoi de factures et relance des impayés",
        "Outils d'IA internes pour effectuer des recherches complexes",
        "Notifications internes et synchronisation multi-outils",
        "Mais bien d'autres choses encore !",
      ],
    },
    {
      icon: Shield,
      title: "RGPD & Souveraineté",
      description:
        "Nos agents IA sont 100 % souverains et conformes au RGPD.",
      features: [
        "Hébergés en France sur serveurs sécurisés",
        "Garantissent la confidentialité totale de vos données",
        "Aucune dépendance à des API étrangères, aucun transfert hors UE",
        "Vous restez seul propriétaire de vos informations",
        "Une IA performante, éthique et entièrement sous votre contrôle",
      ],
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Des agents IA qui <span className="text-gradient">travaillent pour vous</span>.
          </h2>
          <p className="text-lg font-light max-w-3xl mx-auto text-muted-foreground">
            ValorIA déploie des intelligences artificielles prêtes à l'emploi pour automatiser vos interactions, 
            vos tâches récurrentes et libérer votre croissance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:glow-primary"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 flex-shrink-0">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
              <ul className="space-y-2 ml-[72px]">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-2 flex-shrink-0">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary hover:glow-intense transition-all duration-300 font-semibold text-lg px-8"
          >
            Découvrir les offres en détail
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
