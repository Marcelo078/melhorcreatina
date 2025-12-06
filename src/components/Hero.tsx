import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-creatina.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8 animate-slide-up backdrop-blur-sm">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Análises Imparciais • Melhores Preços • Melhores Ofertas
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Descubra as{" "}
            <span className="text-gradient">Melhores Creatinas</span>
            {" "}do Brasil
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Análises completas, comparativos detalhados e as <strong className="text-foreground">melhores ofertas</strong> em 
            creatina monohidratada. Encontre o suplemento ideal para seus treinos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="cta" size="xl" asChild>
              <a href="https://mercadolivre.com/sec/1e23ygz" target="_blank" rel="noopener noreferrer">
                Ver Melhores Ofertas
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#produtos">
                Comparar Produtos
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 md:gap-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Análises Verificadas</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">Top Marcas</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">+50k Leitores</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[2]" />
    </section>
  );
};

export default Hero;
