
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, MessageSquare, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PostCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    image: string;
    slug: string;
    date: string;
    readTime: string;
    commentCount: number;
  };
  featured?: boolean;
}

const PostCard = ({ post, featured = false }: PostCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Tecnologia":
        return "bg-techBlue text-white";
      case "Criptomoedas":
        return "bg-neonGreen text-matteBlack";
      case "Afiliados":
        return "bg-purple-500 text-white";
      case "Tutoriais":
        return "bg-amber-500 text-white";
      case "Análises":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <Card className={`overflow-hidden border-none shadow-sm transition-all duration-300 hover:shadow-md ${featured ? 'h-full' : ''}`}>
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge className={`absolute top-3 left-3 ${getCategoryColor(post.category)}`}>
          {post.category}
        </Badge>
      </div>
      <CardContent className="p-5">
        <Link to={post.slug}>
          <h3 className="text-xl font-semibold mb-2 hover:text-techBlue transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
        <div className="flex items-center text-xs text-muted-foreground space-x-3">
          <span>{post.date}</span>
          <span className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {post.readTime}
          </span>
          <span className="flex items-center">
            <MessageSquare className="h-3 w-3 mr-1" />
            {post.commentCount}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Link to={post.slug} className="text-techBlue font-medium text-sm flex items-center hover:underline">
          Ler artigo completo <ArrowUpRight className="h-3 w-3 ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
