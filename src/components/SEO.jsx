import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, name, type }) => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hadyra Technologies",
    "url": "https://hadyratechnologies.com/",
    "logo": "https://hadyratechnologies.com/favicon.svg",
    "description": "HADYRA TECHNOLOGIES is a premium software engineering firm operating in Chennai, India and Doha, Qatar. We specialize in building scalable, secure, and beautiful digital solutions for modern enterprises.",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Doha",
        "addressCountry": "QA"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service"
    }
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      {/* End standard metadata tags */}
      
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
      
      {/* Optional: Keywords */}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Structured Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
};

SEO.defaultProps = {
  title: 'HADYRA TECHNOLOGIES | Premium IT Services & Solutions',
  description: 'HADYRA TECHNOLOGIES provides top-tier, enterprise-ready software solutions, web development, and digital transformation services.',
  name: 'Hadyra Technologies',
  type: 'website'
};

export default SEO;
