import {
  FileText,
  Smartphone,
  ClipboardList,
  Users,
  Megaphone,
  Watch,
  Headphones,
  BarChart3,
  GraduationCap,
  Navigation,
  LifeBuoy,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Prontuário Eletrônico Próprio",
      description:
        "Sistema integrado com triagem e teleatendimento. Registro em tempo real com alertas automatizados.",
    },
    {
      icon: Smartphone,
      title: "Aplicativo de Gestão",
      description:
        "Comunicação com familiares, acompanhamento clínico, feedback pós-visita e alertas de ocorrências.",
    },
    {
      icon: ClipboardList,
      title: "POPs Certificados",
      description:
        "Procedimentos Operacionais Padrão para todas as frentes assistenciais, atualizados por equipe técnica.",
    },
    {
      icon: Users,
      title: "Plataforma Oportuniza.digital",
      description:
        "Banco de talentos na área da saúde com seleção automatizada e modelo diferenciado.",
    },
    {
      icon: Megaphone,
      title: "Marketing Completo",
      description:
        "Campanhas, posts, e-books, anúncios e materiais sazonais personalizados para sua região.",
    },
    {
      icon: Watch,
      title: "Devices Médicos Homologados",
      description:
        "Dispositivos inteligentes com sensores conectados à plataforma com acompanhamento 24/7.",
    },
    {
      icon: Headphones,
      title: "Teleassistência 24/7",
      description:
        "Equipe própria de enfermagem para triagem, orientação e encaminhamento com registro automatizado.",
    },
    {
      icon: BarChart3,
      title: "Painel de Indicadores",
      description:
        "Relatórios gerenciais mensais com KPIs clínicos e operacionais. Apoio da matriz nas decisões.",
    },
    {
      icon: GraduationCap,
      title: "Capacitação em Crônicos",
      description:
        "Gerenciamento de DPOC, diabetes, cardiopatias, oncológicos e idosos frágeis com evidências internacionais.",
    },
    {
      icon: Navigation,
      title: "Enfermeiros Navegadores",
      description:
        "Profissionais treinados para coordenar o cuidado e integrar a equipe multidisciplinar.",
    },
    {
      icon: LifeBuoy,
      title: "Suporte Contínuo",
      description:
        "Reuniões mensais, suporte técnico, jurídico, comercial e de marketing. Grupo exclusivo de licenciados.",
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Tecnologias
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Serviços Disponibilizados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Treinamento e acesso completo às ferramentas e soluções da Vamos Cuidar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
