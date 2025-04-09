
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FeaturedPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  slug: string;
}

const featuredPosts: FeaturedPost[] = [
  {
    id: 1,
    title: "Como Blockchain Está Mudando a Indústria Financeira em 2023",
    excerpt: "Descubra as principais tendências de blockchain e como essa tecnologia está revolucionando o setor financeiro global.",
    category: "Criptomoedas",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2070&auto=format&fit=crop",
    slug: "/post/blockchain-finance-2023",
  },
  {
    id: 2,
    title: "10 Estratégias Avançadas para Marketing de Afiliados em 2023",
    excerpt: "Aprenda técnicas modernas para aumentar sua conversão e maximizar seus ganhos com marketing de afiliados.",
    category: "Afiliados",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    slug: "/post/affiliate-marketing-strategies",
  },
  {
    id: 3,
    title: "Análise: Os Melhores Smartphones 5G de 2023",
    excerpt: "Confira nossa análise completa dos smartphones mais avançados com tecnologia 5G disponíveis no mercado.",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop",
    slug: "/post/best-5g-smartphones-2023",
  },
];

const FeaturedCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredPosts.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredPosts.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Tecnologia":
        return "bg-techBlue text-white";
      case "Criptomoedas":
        return "bg-neonGreen text-matteBlack";
      case "Afiliados":
        return "bg-purple-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl h-[440px] md:h-[500px]">
      {featuredPosts.map((post, index) => (
        <div
          key={post.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-matteBlack/80 to-transparent z-10" />
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 z-20 animate-slide-up">
              <Badge className={`mb-3 ${getCategoryColor(post.category)}`}>{post.category}</Badge>
              <h2 className="text-xl md:text-3xl font-bold text-white mb-2">{post.title}</h2>
              <p className="text-white/80 mb-4 hidden md:block">{post.excerpt}</p>
              <Link to={post.slug}>
                <Button variant="default" className="bg-techBlue hover:bg-blue-700">
                  Ler mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <div className="absolute bottom-4 right-4 flex space-x-2 z-30">
        <Button
          variant="outline"
          size="icon"
          className="bg-black/30 border-white/20 text-white hover:bg-black/50"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-black/30 border-white/20 text-white hover:bg-black/50"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-4 flex space-x-2 z-30">
        {featuredPosts.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;
