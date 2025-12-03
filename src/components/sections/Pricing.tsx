import { BadgeDollarSign, Calendar, Percent } from "lucide-react";

const Pricing = () => {
  const taxes = [
    {
      icon: BadgeDollarSign,
      title: "Taxa Inicial de Licenciamento",
      subtitle: "One-Time",
      description:
        "Valor único para acesso à marca e Kit Inicial (identidade visual, templates, treinamentos, onboarding).",
      value: "R$ 11.000 a R$ 22.000",
      note: "conforme estrutura da unidade",
    },
    {
      icon: Calendar,
      title: "Taxa Mensal (Fixa)",
      subtitle: "Mensal",
      description: "Valor base para manter suporte e uso da marca.",
      value: "R$ 4.000,00",
      note: "por mês",
    },
    {
      icon: Percent,
      title: "Taxa de Licença Variável",
      subtitle: "% Faturamento",
      description: "Cobrada após o início do faturamento sobre o bruto mensal.",
      value: "7%",
      note: "mínimo de R$ 1.000,00",
    },
  ];

  return (
    <section id="investimento" className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Investimento
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Modelo de Remuneração e Taxas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estrutura transparente com taxa inicial, mensal fixa e variável sobre o faturamento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {taxes.map((tax, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <tax.icon className="w-6 h-6 text-primary" />
              </div>

              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {tax.subtitle}
              </span>

              <h3 className="text-lg font-bold text-card-foreground mb-3">
                {tax.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-6">
                {tax.description}
              </p>

              <div className="border-t border-border pt-6">
                <p className="text-2xl font-bold text-primary">{tax.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{tax.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
