import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { FileText } from "lucide-react";

const Termos = () => {
  return (
    <>
      <SEOHead
        title="Termos de Uso"
        description="Termos de uso do Melhores Creatina BR. Condições para utilização do nosso site e serviços."
        canonical="https://melhorescreatinabr.com.br/termos"
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <FileText className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold">
                  Termos de Uso
                </h1>
                <p className="text-muted-foreground">Última atualização: Dezembro de 2024</p>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <article className="bg-card border border-border rounded-2xl p-6 md:p-10 space-y-8">
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    1. Aceitação dos Termos
                  </h2>
                  <p className="text-muted-foreground">
                    Ao acessar e utilizar o site <strong className="text-foreground">Melhores Creatina BR</strong>, 
                    você concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, 
                    por favor, não utilize nosso site.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    2. Descrição do Serviço
                  </h2>
                  <p className="text-muted-foreground">
                    O Melhores Creatina BR é um site de conteúdo informativo que fornece:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                    <li>Análises e comparativos de produtos de creatina</li>
                    <li>Informações sobre suplementação esportiva</li>
                    <li>Links para compra em parceiros afiliados</li>
                    <li>Conteúdo educativo sobre nutrição esportiva</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    3. Links de Afiliados
                  </h2>
                  <p className="text-muted-foreground">
                    Este site participa de programas de afiliados, incluindo o programa de afiliados do Mercado Livre. 
                    Isso significa que:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                    <li>Podemos receber comissões por compras realizadas através de nossos links</li>
                    <li>Os preços dos produtos são determinados pelos vendedores, não por nós</li>
                    <li>Não temos controle sobre disponibilidade de estoque ou entrega</li>
                    <li>Recomendamos verificar as informações diretamente no site do vendedor</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    4. Conteúdo Informativo
                  </h2>
                  <p className="text-muted-foreground">
                    Todo o conteúdo disponibilizado neste site é de caráter <strong className="text-foreground">meramente informativo</strong> e 
                    não substitui orientação médica, nutricional ou de qualquer profissional de saúde. 
                    Antes de utilizar qualquer suplemento, consulte um profissional qualificado.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    5. Propriedade Intelectual
                  </h2>
                  <p className="text-muted-foreground">
                    Todo o conteúdo do site, incluindo textos, imagens, logotipos e design, 
                    é protegido por direitos autorais. É proibida a reprodução sem autorização prévia.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    6. Limitação de Responsabilidade
                  </h2>
                  <p className="text-muted-foreground">
                    O Melhores Creatina BR não se responsabiliza por:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                    <li>Decisões tomadas com base no conteúdo do site</li>
                    <li>Qualidade ou eficácia dos produtos anunciados</li>
                    <li>Transações realizadas em sites de terceiros</li>
                    <li>Problemas técnicos ou indisponibilidade do site</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    7. Modificações
                  </h2>
                  <p className="text-muted-foreground">
                    Reservamos o direito de modificar estes Termos de Uso a qualquer momento. 
                    As alterações entram em vigor imediatamente após a publicação no site.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    8. Contato
                  </h2>
                  <p className="text-muted-foreground">
                    Para dúvidas sobre estes termos:
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

export default Termos;
