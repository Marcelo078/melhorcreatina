import { Link } from "react-router-dom";
import { Zap, Mail, Shield, FileText, Users, Scale } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    institucional: [
      { name: "Sobre Nós", href: "/sobre", icon: Users },
      { name: "Política de Privacidade", href: "/privacidade", icon: Shield },
      { name: "Termos de Uso", href: "/termos", icon: FileText },
      { name: "Transparência", href: "/transparencia", icon: Scale },
    ],
    categorias: [
      { name: "Creatina Monohidratada", href: "/#produtos" },
      { name: "Pré-Treinos", href: "/#produtos" },
      { name: "Suplementos", href: "https://mercadolivre.com/sec/1WqdDGr" },
      { name: "Ofertas", href: "https://mercadolivre.com/sec/14GQgfK" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight text-gradient">
                  Melhores Creatina
                </span>
                <span className="text-xs text-muted-foreground font-medium">BR</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-4">
              Seu guia completo para encontrar as <strong className="text-foreground">melhores creatinas do Brasil</strong>. 
              Análises imparciais, comparativos detalhados e as melhores ofertas para otimizar seus treinos.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>contato@melhorescreatinabr.com.br</span>
            </div>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Institucional</h4>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Categorias</h4>
            <ul className="space-y-3">
              {footerLinks.categorias.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Melhores Creatina BR. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground text-center max-w-lg">
              Este site participa de programas de afiliados. Ao comprar através de nossos links, 
              podemos receber uma comissão sem custo adicional para você.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
