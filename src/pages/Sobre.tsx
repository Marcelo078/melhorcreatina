import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Heart, ArrowRight } from "lucide-react";

const Sobre = () => {
  return (
    <>
      <SEOHead
        title="Sobre Nós - Quem Somos"
        description="Conheça o Melhores Creatina BR. Nossa missão é ajudar você a encontrar os melhores suplementos com análises imparciais e transparentes."
        canonical="https://melhorescreatinabr.com.br/sobre"
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Sobre Nós</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Ajudando Você a Escolher a{" "}
                <span className="text-gradient">Melhor Creatina</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Somos apaixonados por fitness e nutrição esportiva. Nossa missão é simplificar 
                sua jornada na busca pelo suplemento ideal.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
              <div className="bg-card border border-border rounded-2xl p-8 text-center card-hover">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Nossa Missão</h3>
                <p className="text-muted-foreground">
                  Fornecer informações confiáveis e imparciais para que você faça a melhor escolha 
                  em suplementação esportiva.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 text-center card-hover">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Compromisso</h3>
                <p className="text-muted-foreground">
                  Análises detalhadas baseadas em pesquisa, avaliações reais de consumidores 
                  e dados científicos atualizados.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 text-center card-hover">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Transparência</h3>
                <p className="text-muted-foreground">
                  Somos transparentes sobre nosso modelo de afiliados e nunca comprometemos 
                  a qualidade de nossas recomendações.
                </p>
              </div>
            </div>

            {/* About Content */}
            <div className="max-w-4xl mx-auto">
              <article className="bg-card border border-border rounded-2xl p-6 md:p-10 space-y-6">
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Por Que Criamos o Melhores Creatina BR?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    O mercado de suplementos no Brasil é vasto e muitas vezes confuso. Com dezenas de marcas, 
                    variações de fórmulas e promessas de resultados, encontrar a <strong className="text-foreground">creatina ideal</strong> pode 
                    ser desafiador. Criamos este portal para centralizar informações de qualidade, 
                    análises detalhadas e as melhores ofertas em um só lugar.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Como Trabalhamos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nossa equipe analisa cada produto considerando diversos fatores:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      "Pureza e qualidade da fórmula",
                      "Reputação da marca no mercado",
                      "Avaliações de consumidores reais",
                      "Custo-benefício",
                      "Certificações e testes laboratoriais",
                      "Experiência de uso e resultados"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Modelo de Afiliados
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Somos transparentes: este site é monetizado através de programas de afiliados. 
                    Quando você compra um produto através de nossos links, podemos receber uma pequena comissão 
                    sem nenhum custo adicional para você. Isso nos permite manter o site funcionando e 
                    continuar produzindo conteúdo de qualidade. <strong className="text-foreground">Importante:</strong> nossas 
                    recomendações são baseadas em qualidade, não em comissões.
                  </p>
                </section>
              </article>

              {/* CTA */}
              <div className="text-center mt-12">
                <h3 className="font-display text-2xl font-bold mb-4">
                  Pronto para encontrar sua creatina ideal?
                </h3>
                <Button variant="cta" size="lg" asChild>
                  <a href="https://mercadolivre.com/sec/1e23ygz" target="_blank" rel="noopener noreferrer">
                    Ver Melhores Ofertas
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Sobre;
