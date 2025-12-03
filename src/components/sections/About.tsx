import { Building2, User, CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="modelo" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Estrutura
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Como Funciona o Modelo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um sistema estruturado que permite profissionais da saúde operarem com a marca Vamos Cuidar de forma independente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Matriz */}
          <div className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-shadow duration-300">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">
              Matriz – Vamos Cuidar
            </h3>
            <p className="text-muted-foreground mb-6">
              Detém a marca e os ativos intelectuais, fornecendo todo o suporte necessário.
            </p>
            <ul className="space-y-3">
              {[
                "Licença de uso da marca",
                "Manual de operação completo",
                "Suporte de marketing e tecnologia",
                "Suporte jurídico e treinamentos",
                "Acesso a sistemas e protocolos",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-card-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Licenciado */}
          <div className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-shadow duration-300">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <User className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-4">
              Licenciado (Gestor Associado)
            </h3>
            <p className="text-muted-foreground mb-6">
              Pessoa física ou jurídica que opera a unidade local com autonomia.
            </p>
            <ul className="space-y-3">
              {[
                "Opera sob o nome 'Vamos Cuidar [Cidade]'",
                "Assume custos locais e equipe",
                "Segue padrões operacionais da marca",
                "Autonomia na gestão diária",
                "Acesso a todas as ferramentas",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-card-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
