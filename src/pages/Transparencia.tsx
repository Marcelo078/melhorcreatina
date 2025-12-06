import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Scale, AlertTriangle, Info, CheckCircle } from "lucide-react";

const Transparencia = () => {
  return (
    <>
      <SEOHead
        title="Transparência e Isenção de Responsabilidade"
        description="Política de transparência e isenção de responsabilidade do Melhores Creatina BR. Entenda nosso compromisso com a honestidade e clareza."
        canonical="https://melhorescreatinabr.com.br/transparencia"
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Scale className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold">
                  Transparência e Isenção de Responsabilidade
                </h1>
                <p className="text-muted-foreground">Última atualização: Dezembro de 2024</p>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground mb-2">
                    Aviso Importante
                  </h2>
                  <p className="text-muted-foreground">
                    Este site tem caráter <strong className="text-foreground">exclusivamente informativo</strong>. 
                    As informações aqui apresentadas não substituem a orientação de médicos, nutricionistas 
                    ou outros profissionais de saúde qualificados.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <article className="bg-card border border-border rounded-2xl p-6 md:p-10 space-y-8">
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Info className="w-6 h-6 text-primary" />
                    Divulgação de Afiliados
                  </h2>
                  <p className="text-muted-foreground">
                    O <strong className="text-foreground">Melhores Creatina BR</strong> participa de programas de afiliados, 
                    incluindo o programa de afiliados do <strong className="text-foreground">Mercado Livre</strong>. Isso significa que:
                  </p>
                  <ul className="list-none space-y-3 mt-4">
                    {[
                      "Alguns links neste site são links de afiliados",
                      "Podemos receber comissões por compras realizadas através desses links",
                      "Você não paga nenhum valor adicional por usar nossos links",
                      "As comissões recebidas ajudam a manter este site funcionando"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Integridade Editorial
                  </h2>
                  <p className="text-muted-foreground">
                    Nosso compromisso com você:
                  </p>
                  <ul className="list-none space-y-3 mt-4">
                    {[
                      "Nossas recomendações são baseadas em qualidade, não em comissões",
                      "Analisamos produtos de forma imparcial e honesta",
                      "Destacamos tanto pontos positivos quanto negativos",
                      "Atualizamos nosso conteúdo regularmente"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Isenção de Responsabilidade sobre Produtos
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    <strong className="text-foreground">Não nos responsabilizamos por:</strong>
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Qualidade, eficácia ou segurança dos produtos anunciados</li>
                    <li>Precisão dos preços (podem mudar a qualquer momento)</li>
                    <li>Disponibilidade de estoque</li>
                    <li>Problemas com entregas ou transações</li>
                    <li>Reações adversas ao uso de suplementos</li>
                    <li>Resultados individuais com uso de produtos</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Conteúdo de Saúde
                  </h2>
                  <p className="text-muted-foreground">
                    As informações sobre suplementação, nutrição e exercícios apresentadas neste site 
                    são de caráter <strong className="text-foreground">educativo e informativo</strong>. Elas não devem ser 
                    consideradas como aconselhamento médico ou nutricional. Antes de iniciar qualquer 
                    programa de suplementação:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                    <li>Consulte um médico ou nutricionista</li>
                    <li>Verifique possíveis contraindicações</li>
                    <li>Considere suas condições de saúde individuais</li>
                    <li>Siga as orientações de dosagem do fabricante</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Precisão das Informações
                  </h2>
                  <p className="text-muted-foreground">
                    Embora nos esforcemos para manter todas as informações precisas e atualizadas, 
                    não garantimos que o conteúdo esteja livre de erros ou omissões. Especificações 
                    de produtos, preços e disponibilidade podem mudar sem aviso prévio.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Contato
                  </h2>
                  <p className="text-muted-foreground">
                    Para reportar informações incorretas ou esclarecer dúvidas:
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

export default Transparencia;
