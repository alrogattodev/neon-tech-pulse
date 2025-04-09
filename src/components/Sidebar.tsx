
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Search, Mail, Tag, Hash } from "lucide-react";

const Sidebar = () => {
  const [email, setEmail] = useState("");

  const popularCategories = [
    { name: "Tecnologia", count: 24, path: "/category/technology" },
    { name: "Criptomoedas", count: 18, path: "/category/crypto" },
    { name: "Afiliados", count: 12, path: "/category/affiliate" },
    { name: "Tutoriais", count: 9, path: "/category/tutorials" },
    { name: "Análises", count: 7, path: "/category/reviews" },
  ];

  const popularTags = [
    { name: "Bitcoin", path: "/tag/bitcoin" },
    { name: "NFT", path: "/tag/nft" },
    { name: "Marketing", path: "/tag/marketing" },
    { name: "SEO", path: "/tag/seo" },
    { name: "Inteligência Artificial", path: "/tag/ai" },
    { name: "5G", path: "/tag/5g" },
    { name: "Inovação", path: "/tag/inovacao" },
    { name: "Empreendedorismo", path: "/tag/empreendedorismo" },
  ];

  const recentPosts = [
    {
      title: "Como Otimizar seu Site para SEO em 2023",
      date: "12 Abr, 2023",
      slug: "/post/otimizar-site-seo-2023",
    },
    {
      title: "5 Tendências de Criptomoedas que Você Precisa Conhecer",
      date: "8 Abr, 2023",
      slug: "/post/tendencias-criptomoedas-2023",
    },
    {
      title: "Tutorial: Como Criar uma Loja Virtual com Shopify",
      date: "1 Abr, 2023",
      slug: "/post/tutorial-loja-shopify",
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement newsletter subscription
    console.log("Subscribing email:", email);
    alert("Obrigado por se inscrever! Em breve você receberá nossas atualizações.");
    setEmail("");
  };

  return (
    <div className="space-y-6">
      {/* Search Card */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Search className="h-4 w-4 mr-2" /> Buscar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Input placeholder="O que você está procurando?" className="pr-10" />
            <Button
              size="sm"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Card */}
      <Card className="bg-gradient-to-br from-techBlue/90 to-techBlue text-white">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Mail className="h-4 w-4 mr-2" /> Newsletter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-4">
            Receba as últimas notícias e atualizações diretamente em seu e-mail
          </p>
          <form onSubmit={handleSubscribe}>
            <Input
              type="email"
              placeholder="Seu e-mail"
              className="mb-3 bg-white/20 border-white/10 placeholder:text-white/70 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="w-full bg-white text-techBlue hover:bg-white/90"
            >
              Inscrever-se
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Categories Card */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Tag className="h-4 w-4 mr-2" /> Categorias
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {popularCategories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="flex items-center justify-between group"
              >
                <span className="text-sm group-hover:text-techBlue transition-colors">
                  {category.name}
                </span>
                <Badge variant="outline">{category.count}</Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts Card */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Posts Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={post.slug}>
                <Link
                  to={post.slug}
                  className="text-sm font-medium hover:text-techBlue transition-colors"
                >
                  {post.title}
                </Link>
                <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                {index < recentPosts.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tags Cloud */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Hash className="h-4 w-4 mr-2" /> Tags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Link key={tag.path} to={tag.path}>
                <Badge variant="secondary" className="hover:bg-muted transition-colors">
                  {tag.name}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Affiliate Links Card */}
      <Card className="bg-matteBlack text-white">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Produtos Recomendados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden bg-gray-800 p-4">
              <h4 className="font-medium text-sm mb-2">Curso Completo de Marketing Digital</h4>
              <p className="text-xs text-gray-300 mb-3">
                Aprenda estratégias avançadas de marketing digital e aumente seus resultados.
              </p>
              <Button
                className="w-full bg-neonGreen text-matteBlack hover:bg-neonGreen/90"
                size="sm"
              >
                Conhecer Curso
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-800 p-4">
              <h4 className="font-medium text-sm mb-2">eBook: Guia para Investimentos em Cripto</h4>
              <p className="text-xs text-gray-300 mb-3">
                Um guia essencial para quem quer começar a investir em criptomoedas com segurança.
              </p>
              <Button
                className="w-full bg-techBlue text-white hover:bg-blue-700"
                size="sm"
              >
                Fazer Download
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
