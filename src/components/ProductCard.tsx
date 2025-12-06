import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, Star } from "lucide-react";
import { Product } from "@/data/products";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <article 
      className="group bg-card border border-border rounded-2xl overflow-hidden card-hover"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 p-6 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Placeholder with brand styling */}
        <div className="relative z-10 text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <span className="text-4xl">💪</span>
          </div>
          <p className="text-sm font-semibold text-primary">{product.brand}</p>
          <p className="text-xs text-muted-foreground">{product.weight}</p>
        </div>

        {/* Top Badge */}
        {index < 3 && (
          <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground font-bold">
            <Star className="w-3 h-3 mr-1" />
            Top {index + 1}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {product.features.slice(0, 2).map((feature, i) => (
            <span 
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <Link to={`/produto/${product.slug}`}>
              <BookOpen className="w-4 h-4" />
              Saiba Mais
            </Link>
          </Button>
          <Button variant="affiliate" size="sm" className="flex-1" asChild>
            <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
              Comprar
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
