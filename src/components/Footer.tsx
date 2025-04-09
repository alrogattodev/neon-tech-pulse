
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const categories = [
    { name: "Tecnologia", path: "/category/technology" },
    { name: "Criptomoedas", path: "/category/crypto" },
    { name: "Afiliados", path: "/category/affiliate" },
    { name: "Tutoriais", path: "/category/tutorials" },
    { name: "Análises", path: "/category/reviews" },
  ];

  const pages = [
    { name: "Sobre", path: "/about" },
    { name: "Contato", path: "/contact" },
    { name: "Política de Privacidade", path: "/privacy" },
    { name: "Termos de Uso", path: "/terms" },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-techBlue to-neonGreen">
                TechPulse
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Blog de tecnologia, criptomoedas e marketing de afiliados com as últimas novidades 
              e análises aprofundadas para manter você atualizado.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-techBlue transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-techBlue transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-techBlue transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-techBlue transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-techBlue transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.path}>
                  <Link
                    to={category.path}
                    className="text-muted-foreground hover:text-techBlue transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="text-muted-foreground hover:text-techBlue transition-colors"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} TechPulse. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground">
              Feito com 💙 by <Link to="/" className="text-techBlue hover:underline">TechPulse</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
