import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Contactez-nous</span>
            </h2>
            <p className="text-lg font-light text-muted-foreground">
              Prêt à transformer votre entreprise avec l'IA ? Parlons-en.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Société"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary hover:glow-intense transition-all duration-300 font-semibold"
                >
                  Envoyer
                </Button>
              </form>
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Informations de contact</h3>
                <div className="flex items-center gap-3 text-muted-foreground mb-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:contact@valoria.ai" className="hover:text-primary transition-colors">
                    contact@valoria.ai
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:border-primary hover:glow-primary transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:border-primary hover:glow-primary transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
