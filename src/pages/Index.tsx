
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

// Mock data for posts
const posts = [
  {
    id: 1,
    title: "Como Blockchain Está Mudando a Indústria Financeira em 2023",
    excerpt: "Descubra as principais tendências de blockchain e como essa tecnologia está revolucionando o setor financeiro global.",
    category: "Criptomoedas",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2070&auto=format&fit=crop",
    slug: "/post/blockchain-finance-2023",
    date: "15 Abr, 2023",
    readTime: "7 min",
    commentCount: 12,
  },
  {
    id: 2,
    title: "10 Estratégias Avançadas para Marketing de Afiliados em 2023",
    excerpt: "Aprenda técnicas modernas para aumentar sua conversão e maximizar seus ganhos com marketing de afiliados.",
    category: "Afiliados",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    slug: "/post/affiliate-marketing-strategies",
    date: "12 Abr, 2023",
    readTime: "9 min",
    commentCount: 8,
  },
  {
    id: 3,
    title: "Análise: Os Melhores Smartphones 5G de 2023",
    excerpt: "Confira nossa análise completa dos smartphones mais avançados com tecnologia 5G disponíveis no mercado.",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop",
    slug: "/post/best-5g-smartphones-2023",
    date: "10 Abr, 2023",
    readTime: "11 min",
    commentCount: 15,
  },
  {
    id: 4,
    title: "Tutorial: Como Criar um Site de Alta Performance com React",
    excerpt: "Aprenda a desenvolver sites rápidos e modernos utilizando React e as melhores práticas de otimização.",
    category: "Tutoriais",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop",
    slug: "/post/high-performance-react-site",
    date: "8 Abr, 2023",
    readTime: "14 min",
    commentCount: 7,
  },
  {
    id: 5,
    title: "O Futuro das NFTs: Arte Digital, Gaming e Além",
    excerpt: "Uma análise profunda sobre o futuro dos tokens não fungíveis e seus impactos em diversos setores.",
    category: "Criptomoedas",
    image: "https://images.unsplash.com/photo-1645367547326-5ee0567dec60?q=80&w=1974&auto=format&fit=crop",
    slug: "/post/future-of-nfts",
    date: "5 Abr, 2023",
    readTime: "8 min",
    commentCount: 9,
  },
  {
    id: 6,
    title: "SEO em 2023: Como Ranquear seu Site no Topo do Google",
    excerpt: "Descubra as estratégias mais eficientes para otimizar seu site e conquistar as primeiras posições no Google.",
    category: "Afiliados",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2074&auto=format&fit=crop",
    slug: "/post/seo-google-ranking-2023",
    date: "2 Abr, 2023",
    readTime: "10 min",
    commentCount: 14,
  },
];

// More posts to display under tabs
const techPosts = posts.filter(post => post.category === "Tecnologia");
const cryptoPosts = posts.filter(post => post.category === "Criptomoedas");
const affiliatePosts = posts.filter(post => post.category === "Afiliados");
const tutorialPosts = posts.filter(post => post.category === "Tutoriais");

const Index = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Featured Posts Carousel */}
        <section className="container mx-auto px-4 mt-6">
          <FeaturedCarousel />
        </section>

        {/* Main content with sidebar */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Posts Recentes</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {posts.slice(0, 4).map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {/* Category tabs */}
              <div className="mb-12">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-6">
                    <TabsTrigger 
                      value="all" 
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-techBlue data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2 text-base font-medium"
                    >
                      Todos
                    </TabsTrigger>
                    <TabsTrigger 
                      value="tech" 
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-techBlue data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2 text-base font-medium"
                    >
                      Tecnologia
                    </TabsTrigger>
                    <TabsTrigger 
                      value="crypto" 
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-techBlue data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2 text-base font-medium"
                    >
                      Criptomoedas
                    </TabsTrigger>
                    <TabsTrigger 
                      value="affiliate" 
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-techBlue data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2 text-base font-medium"
                    >
                      Afiliados
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="m-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {posts.map(post => (
                        <PostCard key={post.id} post={post} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="tech" className="m-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {techPosts.length > 0 ? (
                        techPosts.map(post => <PostCard key={post.id} post={post} />)
                      ) : (
                        <p className="text-muted-foreground col-span-2">Nenhum post encontrado nesta categoria.</p>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="crypto" className="m-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {cryptoPosts.length > 0 ? (
                        cryptoPosts.map(post => <PostCard key={post.id} post={post} />)
                      ) : (
                        <p className="text-muted-foreground col-span-2">Nenhum post encontrado nesta categoria.</p>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="affiliate" className="m-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {affiliatePosts.length > 0 ? (
                        affiliatePosts.map(post => <PostCard key={post.id} post={post} />)
                      ) : (
                        <p className="text-muted-foreground col-span-2">Nenhum post encontrado nesta categoria.</p>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="flex justify-center mt-8">
                  <Button className="group">
                    Ver mais artigos
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Newsletter banner for mobile */}
              <div className="bg-gradient-to-r from-techBlue/90 to-techBlue rounded-xl p-6 mb-12 lg:hidden">
                <h3 className="text-xl font-bold text-white mb-2">
                  Inscreva-se em nossa Newsletter
                </h3>
                <p className="text-white/90 mb-4">
                  Receba os melhores conteúdos sobre tecnologia e marketing diretamente no seu email.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="rounded-md px-4 py-2 bg-white/20 border-white/10 text-white placeholder:text-white/70 flex-grow focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button className="bg-white text-techBlue hover:bg-white/90">
                    Inscrever-se
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="hidden lg:block">
              <Sidebar />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
