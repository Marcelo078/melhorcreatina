import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Star, 
  CheckCircle2, 
  Shield, 
  Truck, 
  Award,
  ChevronRight,
  ArrowLeft,
  Zap,
  Target,
  TrendingUp,
  Heart,
  Share2,
  Clock,
  Users,
  ThumbsUp
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProductCard from "@/components/ProductCard";

const Produto = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Produto não encontrado</h1>
          <p className="text-muted-foreground mb-8">
            O produto que você procura não existe ou foi removido.
          </p>
          <Button asChild>
            <Link to="/">Voltar para Home</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.brand === product.brand)
    .slice(0, 3);
  
  const otherProducts = relatedProducts.length < 3 
    ? products.filter((p) => p.id !== product.id).slice(0, 4)
    : relatedProducts;

  const productIndex = products.findIndex((p) => p.id === product.id);
  const isTopProduct = productIndex < 3;

  // Generate FAQ data
  const faqs = [
    {
      question: `Como tomar ${product.name}?`,
      answer: `A dose recomendada de creatina é de 3 a 5 gramas por dia. Você pode misturar com água, suco ou shake de proteína. Tome preferencialmente após o treino ou pela manhã. A ${product.brand} recomenda seguir as instruções do rótulo para melhores resultados.`
    },
    {
      question: `A ${product.name} é original e segura?`,
      answer: `Sim! Todos os produtos que recomendamos são originais e vendidos por lojas oficiais no Mercado Livre. A ${product.brand} é uma marca reconhecida no mercado de suplementos brasileiro, com registro na ANVISA e controle de qualidade rigoroso.`
    },
    {
      question: `Quanto tempo leva para ver resultados com ${product.brand}?`,
      answer: `Os primeiros resultados da suplementação com creatina podem ser percebidos entre 2 a 4 semanas de uso consistente. Você notará aumento na força, resistência muscular e melhor recuperação pós-treino. Resultados podem variar de acordo com dieta e intensidade dos treinos.`
    },
    {
      question: `Posso tomar creatina todos os dias?`,
      answer: `Sim! A creatina deve ser tomada diariamente para manter os níveis saturados nos músculos. Não é necessário ciclar ou fazer pausas. A consistência é fundamental para obter os melhores resultados.`
    },
    {
      question: `A creatina causa retenção de líquidos?`,
      answer: `A creatina pode causar uma leve retenção de água intramuscular, o que é positivo pois ajuda na hidratação das células musculares. Isso não é o mesmo que inchaço ou retenção subcutânea. Beba bastante água durante a suplementação.`
    }
  ];

  // Benefits data
  const benefits = [
    { icon: Zap, title: "Mais Energia", desc: "Aumento da força e potência muscular" },
    { icon: Target, title: "Foco nos Treinos", desc: "Melhor desempenho e concentração" },
    { icon: TrendingUp, title: "Ganho de Massa", desc: "Suporte ao crescimento muscular" },
    { icon: Clock, title: "Recuperação Rápida", desc: "Menos fadiga pós-treino" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`${product.name} - Análise Completa 2025`}
        description={`${product.description} Confira análise detalhada, preço, benefícios e onde comprar ${product.name} com as melhores ofertas.`}
        product={{
          name: product.name,
          brand: product.brand,
          description: product.description
        }}
        article={{
          publishedTime: "2025-12-06",
          section: "Suplementos"
        }}
      />
      
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b border-border">
          <div className="container py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <Link to="/#produtos" className="text-muted-foreground hover:text-primary transition-colors">
                Produtos
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium truncate max-w-[200px]">
                {product.name}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Product Section */}
        <section className="container py-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para todos os produtos
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-muted to-muted/50 p-12 flex items-center justify-center sticky top-24">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl" />
                
                {isTopProduct && (
                  <Badge className="absolute top-6 left-6 bg-secondary text-secondary-foreground font-bold text-lg px-4 py-2">
                    <Star className="w-5 h-5 mr-2" />
                    Top {productIndex + 1} Vendas
                  </Badge>
                )}

                <div className="absolute top-6 right-6 flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center shadow-2xl">
                    <span className="text-7xl">💪</span>
                  </div>
                  <p className="text-xl font-bold text-primary">{product.brand}</p>
                  <p className="text-muted-foreground">{product.weight}</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="text-primary border-primary">
                  {product.brand}
                </Badge>
                <Badge variant="outline" className="text-secondary border-secondary">
                  {product.weight}
                </Badge>
                {isTopProduct && (
                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                    Mais Vendido
                  </Badge>
                )}
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="w-5 h-5 fill-amber-400 text-amber-400" 
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  <Users className="w-4 h-4 inline mr-1" />
                  +2.500 avaliações
                </span>
                <span className="text-green-500 font-medium">
                  <ThumbsUp className="w-4 h-4 inline mr-1" />
                  98% aprovam
                </span>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {product.features.map((feature, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>Produto Original</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="w-5 h-5 text-primary" />
                  <span>Frete Grátis</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Garantia de Qualidade</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="affiliate" 
                  size="lg" 
                  className="flex-1 text-lg h-14" 
                  asChild
                >
                  <a 
                    href={product.affiliateLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Comprar no Mercado Livre
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-4 text-center sm:text-left">
                * Ao clicar, você será redirecionado para o Mercado Livre. 
                Podemos receber uma comissão pela venda.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted/30 py-16">
          <div className="container">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
              Benefícios da <span className="text-gradient">{product.brand}</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <div 
                  key={i}
                  className="bg-card border border-border rounded-2xl p-6 text-center card-hover"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Analysis */}
        <section className="container py-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
            Análise Completa: <span className="text-gradient">{product.name}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <article className="bg-card border border-border rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Por que escolher {product.brand}?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A <strong className="text-foreground">{product.brand}</strong> é uma das marcas mais respeitadas 
                no mercado brasileiro de suplementos. Com anos de experiência e milhares de clientes satisfeitos, 
                a marca se destaca pela qualidade superior de seus produtos e pelo compromisso com a performance 
                dos atletas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A <strong className="text-foreground">{product.name}</strong> oferece {product.weight} de creatina 
                monohidratada de alta pureza, ideal para quem busca ganhos reais de força e massa muscular. 
                Com fórmula testada e aprovada, este suplemento é a escolha certa para atletas iniciantes e avançados.
              </p>
              
              <h3 className="text-xl font-bold mb-4 mt-8 flex items-center gap-2">
                <Zap className="w-6 h-6 text-secondary" />
                Como a Creatina Funciona?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A creatina é um dos suplementos mais estudados e comprovados cientificamente. Ela atua aumentando 
                os estoques de fosfocreatina nos músculos, o que permite maior produção de ATP (energia) durante 
                exercícios de alta intensidade.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Com a <strong className="text-foreground">{product.name}</strong>, você pode esperar:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Aumento de força:</strong> Levante mais peso e faça mais repetições
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Ganho de massa muscular:</strong> Suporte ao crescimento muscular magro
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Melhor recuperação:</strong> Reduza a fadiga e dores pós-treino
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Performance mental:</strong> Estudos indicam melhora cognitiva
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4 mt-8 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Para Quem é Indicado?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A <strong className="text-foreground">{product.name}</strong> é ideal para:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <strong className="text-foreground">🏋️ Praticantes de musculação</strong>
                  <p className="text-sm text-muted-foreground mt-1">Que buscam ganhos de força e hipertrofia</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <strong className="text-foreground">🏃 Atletas de alta performance</strong>
                  <p className="text-sm text-muted-foreground mt-1">Que precisam de energia explosiva</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <strong className="text-foreground">👴 Público senior</strong>
                  <p className="text-sm text-muted-foreground mt-1">Para manutenção da massa muscular</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <strong className="text-foreground">🥗 Vegetarianos/Veganos</strong>
                  <p className="text-sm text-muted-foreground mt-1">Que não obtêm creatina pela dieta</p>
                </div>
              </div>
            </article>

            {/* Specifications Table */}
            <div className="bg-card border border-border rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">Especificações Técnicas</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3 font-medium">Produto</td>
                      <td className="py-3 text-muted-foreground">{product.name}</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Marca</td>
                      <td className="py-3 text-muted-foreground">{product.brand}</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Peso</td>
                      <td className="py-3 text-muted-foreground">{product.weight}</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Tipo</td>
                      <td className="py-3 text-muted-foreground">Creatina Monohidratada</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Porções</td>
                      <td className="py-3 text-muted-foreground">~60-100 doses (3-5g/dia)</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Sabor</td>
                      <td className="py-3 text-muted-foreground">Sem sabor / Neutro</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Forma</td>
                      <td className="py-3 text-muted-foreground">Pó para dissolução</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted/30 py-16">
          <div className="container">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
              Perguntas Frequentes sobre <span className="text-gradient">{product.brand}</span>
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem 
                    key={i} 
                    value={`faq-${i}`}
                    className="bg-card border border-border rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16">
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Pronto para turbinar seus treinos?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Garanta agora sua <strong className="text-foreground">{product.name}</strong> com as 
              melhores ofertas do Mercado Livre. Frete grátis e parcelamento disponível!
            </p>
            <Button 
              variant="affiliate" 
              size="lg" 
              className="text-lg h-14 px-12" 
              asChild
            >
              <a 
                href={product.affiliateLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver Oferta no Mercado Livre
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </section>

        {/* Related Products */}
        <section className="container py-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
            Produtos Relacionados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Produto;
