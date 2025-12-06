import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import AffiliateCategories from "@/components/AffiliateCategories";
import FeaturedArticle from "@/components/FeaturedArticle";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Melhores Creatinas do Brasil 2025 - Análises e Ofertas"
        description="Descubra as melhores creatinas do Brasil em 2025. Comparativos, análises imparciais e as melhores ofertas em creatina monohidratada. Melhores preços garantidos!"
        canonical="https://melhorescreatinabr.com.br"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <ProductCarousel />
          <AffiliateCategories />
          <FeaturedArticle />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
