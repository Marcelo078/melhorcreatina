import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const ProductCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="produtos" className="py-16 md:py-24 section-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
              Catálogo Completo
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Melhores Creatinas</span>: Melhores Preços
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              Compare as principais marcas e encontre a creatina ideal para seus objetivos. 
              <strong className="text-foreground"> Melhores ofertas</strong> do Mercado Livre.
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <div key={product.id} className="flex-none w-[300px] snap-start">
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <Button variant="cta" size="lg" asChild>
            <a href="https://mercadolivre.com/sec/1e23ygz" target="_blank" rel="noopener noreferrer">
              Ver Todas as Ofertas no Mercado Livre
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
