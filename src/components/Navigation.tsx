
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, Search } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories = [
    { name: "Tecnologia", path: "/category/technology" },
    { name: "Criptomoedas", path: "/category/crypto" },
    { name: "Afiliados", path: "/category/affiliate" },
    { name: "Tutoriais", path: "/category/tutorials" },
    { name: "Análises", path: "/category/reviews" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-techBlue to-neonGreen">
            TechPulse
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Search and Actions */}
        <div className="flex items-center space-x-2">
          {isSearchOpen ? (
            <div className="relative">
              <Input
                type="search"
                placeholder="Buscar..."
                className="w-full md:w-64 pr-8"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Input type="search" placeholder="Buscar..." className="mb-2" />
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
