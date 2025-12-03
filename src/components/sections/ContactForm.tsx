import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle2 } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    profession: "",
    investment: "",
  });

  const investmentOptions = [
    { value: "25000", label: "R$ 25.000" },
    { value: "40000", label: "R$ 40.000" },
    { value: "60000", label: "R$ 60.000" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Cadastro enviado com sucesso!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      profession: "",
      investment: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="cadastro" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Cadastro
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Seja um Licenciado
            </h2>
            <p className="text-muted-foreground">
              Interessado em se tornar um Gestor Associado? Preencha o formulário e dê o primeiro passo.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 md:p-10 card-shadow"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-card-foreground">
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-card-foreground">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="profession" className="text-card-foreground">
                  Formação Profissional
                </Label>
                <Input
                  id="profession"
                  type="text"
                  placeholder="Ex: Enfermeiro(a), Fisioterapeuta..."
                  value={formData.profession}
                  onChange={(e) =>
                    setFormData({ ...formData, profession: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-card-foreground">
                  Tenho para investir (em R$)
                </Label>
                <RadioGroup
                  value={formData.investment}
                  onValueChange={(value) =>
                    setFormData({ ...formData, investment: value })
                  }
                  className="grid sm:grid-cols-3 gap-3"
                >
                  {investmentOptions.map((option) => (
                    <div key={option.value}>
                      <RadioGroupItem
                        value={option.value}
                        id={option.value}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={option.value}
                        className="flex items-center justify-center gap-2 p-4 border-2 border-border rounded-xl cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary opacity-0 peer-data-[state=checked]:opacity-100 transition-opacity" />
                        <span className="font-medium text-card-foreground">
                          {option.label}
                        </span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Cadastro
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
