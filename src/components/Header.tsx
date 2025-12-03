import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Modelo", href: "#modelo" },
    { label: "Investimento", href: "#investimento" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contrato", href: "#contrato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Heart
              className={`w-6 h-6 transition-colors ${
                isScrolled ? "text-primary" : "text-primary-foreground"
              }`}
            />
            <span
              className={`font-bold text-lg transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Vamos Cuidar
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button
              variant={isScrolled ? "default" : "hero"}
              size="sm"
              asChild
            >
              <a href="#cadastro">Seja Licenciado</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card rounded-b-2xl shadow-lg p-6 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" className="mt-2" asChild>
                <a
                  href="#cadastro"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Seja Licenciado
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
