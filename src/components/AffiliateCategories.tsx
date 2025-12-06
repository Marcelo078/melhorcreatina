import { Button } from "@/components/ui/button";
import { affiliateCategories } from "@/data/products";
import { ExternalLink } from "lucide-react";

const AffiliateCategories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2 block">
            Categorias em Destaque
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Explore Mais <span className="text-gradient">Ofertas Exclusivas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra as melhores ofertas em diversas categorias. Produtos selecionados com os melhores preços do Mercado Livre.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
          {affiliateCategories.map((category) => (
            <a
              key={category.name}
              href={category.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-4 text-center hover:border-primary/50 hover:bg-card/80 transition-all duration-300 card-hover"
            >
              <span className="text-3xl mb-2 block">{category.icon}</span>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {category.name}
              </span>
              <ExternalLink className="w-3 h-3 mx-auto mt-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliateCategories;
