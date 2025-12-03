import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Profissional de saúde cuidando de paciente idoso em casa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Heart className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              Filial Licenciada – Unidade Associada
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Seja um Licenciado{" "}
            <span className="block">Vamos Cuidar</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Permita que profissionais da saúde atuem com nossa marca, recebendo suporte completo da matriz e operando com autonomia total.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#cadastro">Quero ser Licenciado</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#modelo">Conhecer o Modelo</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {[
              { icon: Shield, label: "Marca Consolidada" },
              { icon: Users, label: "Suporte Completo" },
              { icon: Heart, label: "Autonomia Total" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-4 py-3"
              >
                <item.icon className="w-5 h-5 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
