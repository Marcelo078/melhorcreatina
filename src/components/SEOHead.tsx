import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
  product?: {
    name: string;
    brand: string;
    description: string;
  };
}

const SEOHead = ({ 
  title, 
  description, 
  canonical, 
  ogImage = "/og-image.png",
  article,
  product 
}: SEOHeadProps) => {
  const siteName = "Melhores Creatina BR";
  const fullTitle = `${title} | ${siteName}`;
  const siteUrl = "https://melhorescreatinabr.com.br";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: "Guia completo das melhores creatinas do Brasil. Análises, comparativos e ofertas.",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/busca?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`
        }
      },
      ...(article ? [{
        "@type": "Article",
        headline: title,
        description: description,
        datePublished: article.publishedTime,
        dateModified: article.modifiedTime,
        author: {
          "@type": "Organization",
          name: siteName
        },
        publisher: {
          "@type": "Organization",
          name: siteName,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/logo.png`
          }
        }
      }] : []),
      ...(product ? [{
        "@type": "Product",
        name: product.name,
        brand: {
          "@type": "Brand",
          name: product.brand
        },
        description: product.description,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
          url: canonical
        }
      }] : [])
    ]
  };

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pt_BR" />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article specific */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {article?.section && (
        <meta property="article:section" content={article.section} />
      )}

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
