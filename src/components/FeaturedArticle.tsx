import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Top 7 Creatinas que Vão Dominar 2025: Análise Completa",
    excerpt: "Descubra quais marcas estão revolucionando o mercado de suplementos e por que atletas profissionais estão migrando para essas opções.",
    category: "Ranking",
    readTime: "8 min",
    views: "15.2k",
    slug: "top-7-creatinas-2025",
  },
  {
    id: 2,
    title: "Creatina Monohidratada vs Micronizada: Qual Escolher?",
    excerpt: "Entenda as diferenças entre os tipos de creatina e descubra qual é a melhor opção para o seu objetivo de treino.",
    category: "Guia",
    readTime: "6 min",
    views: "8.7k",
    slug: "creatina-monohidratada-vs-micronizada",
  },
  {
    id: 3,
    title: "A Verdade Sobre a Creatina: O Que Ninguém Te Conta",
    excerpt: "Mitos desvendados e verdades científicas sobre o suplemento mais estudado do mundo. Prepare-se para se surpreender.",
    category: "Mistério",
    readTime: "10 min",
    views: "22.5k",
    slug: "verdade-sobre-creatina",
  },
];

const FeaturedArticle = () => {
  return (
    <section id="artigos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            Blog & Análises
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Artigos em <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conteúdo exclusivo, análises aprofundadas e dicas de especialistas para você fazer a melhor escolha.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden card-hover"
            >
              {/* Image Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-6xl">📚</span>
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {article.category}
                </Badge>
              </div>

              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {article.views}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary">
                  Ler Artigo Completo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            Ver Todos os Artigos
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
