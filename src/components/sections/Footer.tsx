import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            <span className="font-bold text-background">Vamos Cuidar</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {["Modelo", "Investimento", "Serviços", "Contrato", "Cadastro"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Vamos Cuidar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
