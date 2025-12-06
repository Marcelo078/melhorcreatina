import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Shield } from "lucide-react";

const Privacidade = () => {
  return (
    <>
      <SEOHead
        title="Política de Privacidade"
        description="Política de privacidade do Melhores Creatina BR. Saiba como coletamos, usamos e protegemos seus dados pessoais."
        canonical="https://melhorescreatinabr.com.br/privacidade"
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold">
                  Política de Privacidade
                </h1>
                <p className="text-muted-foreground">Última atualização: Dezembro de 2024</p>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <article className="bg-card border border-border rounded-2xl p-6 md:p-10 space-y-8">
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    1. Informações que Coletamos
                  </h2>
                  <p className="text-muted-foreground">
                    O <strong className="text-foreground">Melhores Creatina BR</strong> coleta informações de forma limitada e transparente. 
                    As informações coletadas incluem:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                    <li>Dados de navegação (páginas visitadas, tempo de permanência)</li>
                    <li>Informações do dispositivo (tipo, sistema operacional, navegador)</li>
                    <li>Endereço IP e localização aproximada</li>
                    <li>Cookies e tecnologias similares</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    2. Como Usamos Suas Informações
                  </h2>
                  <p className="text-muted-foreground">
                    Utilizamos as informações coletadas para:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                    <li>Melhorar a experiência de navegação no site</li>
                    <li>Analisar o desempenho do conteúdo</li>
                    <li>Personalizar recomendações de produtos</li>
                    <li>Cumprir obrigações legais</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    3. Compartilhamento de Dados
                  </h2>
                  <p className="text-muted-foreground">
                    Não vendemos suas informações pessoais. Podemos compartilhar dados com:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                    <li>Ferramentas de análise (Google Analytics)</li>
                    <li>Parceiros de afiliados (Mercado Livre) quando você clica em links</li>
                    <li>Autoridades quando exigido por lei</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    4. Cookies
                  </h2>
                  <p className="text-muted-foreground">
                    Utilizamos cookies para melhorar sua experiência. Você pode gerenciar suas preferências 
                    de cookies através das configurações do seu navegador. Os tipos de cookies utilizados incluem:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                    <li><strong className="text-foreground">Essenciais:</strong> necessários para funcionamento do site</li>
                    <li><strong className="text-foreground">Analíticos:</strong> para entender como você usa o site</li>
                    <li><strong className="text-foreground">Marketing:</strong> para rastrear conversões de afiliados</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    5. Seus Direitos
                  </h2>
                  <p className="text-muted-foreground">
                    De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                    <li>Acessar seus dados pessoais</li>
                    <li>Solicitar correção de dados incorretos</li>
                    <li>Solicitar exclusão de seus dados</li>
                    <li>Revogar consentimentos dados anteriormente</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    6. Contato
                  </h2>
                  <p className="text-muted-foreground">
                    Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
                  </p>
                  <p className="text-primary font-medium mt-2">
                    contato@melhorescreatinabr.com.br
                  </p>
                </section>
              </article>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Privacidade;
