import { FileCheck, AlertCircle, TrendingUp, FileText } from "lucide-react";

const Contract = () => {
  const contractPoints = [
    "Definição clara de não-sociedade",
    "Concessão de uso de marca por 12 meses renováveis",
    "Padrões obrigatórios de operação",
    "Direito de rescisão caso metas não sejam atingidas",
    "Cláusula de não concorrência",
    "Auditoria para cálculo dos royalties",
    "Penalidades por uso indevido da marca",
  ];

  const indicators = [
    { icon: TrendingUp, label: "Faturamento mínimo por trimestre" },
    { icon: FileCheck, label: "Retenção de clientes" },
    { icon: AlertCircle, label: "NPS dos atendimentos" },
    { icon: FileText, label: "Aderência aos padrões da marca" },
  ];

  const documents = [
    "Contrato de Licença de Uso de Marca e Suporte",
    "Termo de Adesão ao Modelo Vamos Cuidar",
    "Manual do Licenciado",
    "Tabela de Metas e Indicadores",
    "Controle Financeiro de Royalties",
  ];

  return (
    <section id="contrato" className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Formalização
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Contrato e Indicadores
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparência total na relação entre matriz e licenciados.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contract Points */}
          <div className="bg-card rounded-2xl p-8 card-shadow">
            <h3 className="text-lg font-bold text-card-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-primary" />
              </div>
              Elementos do Contrato
            </h3>
            <ul className="space-y-3">
              {contractPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-card-foreground"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Indicators */}
          <div className="bg-card rounded-2xl p-8 card-shadow">
            <h3 className="text-lg font-bold text-card-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              Indicadores de Permanência
            </h3>
            <div className="space-y-4">
              {indicators.map((indicator, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 bg-secondary rounded-lg"
                >
                  <indicator.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-card-foreground">
                    {indicator.label}
                  </span>
                </div>
              ))}
              <p className="text-xs text-muted-foreground mt-4">
                * Pagamento em dia das taxas também é obrigatório
              </p>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-card rounded-2xl p-8 card-shadow">
            <h3 className="text-lg font-bold text-card-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              Documentos Essenciais
            </h3>
            <ul className="space-y-3">
              {documents.map((doc, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-3 bg-secondary rounded-lg text-sm text-card-foreground"
                >
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-semibold text-primary shrink-0">
                    {index + 1}
                  </span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contract;
