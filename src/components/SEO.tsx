
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title = 'Anax - AI-Powered SDR Platform | AnaxHQ',
  description = 'Anax (AnaxHQ) - Stop wasting time on repetitive sales tasks. Our AI-powered SDR platform handles prospecting, cold emails, and calls automatically. No dashboards, no complexity - just results.',
  type = 'website',
  name = 'Anax',
  imageUrl = '/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
  keywords = ['Anax', 'AnaxHQ', 'AI SDR', 'sales automation', 'cold email', 'lead generation', 'sales development', 'prospecting', 'AI chatbot', 'sales AI', 'automated prospecting']
}) => {
  const location = useLocation();
  const currentUrl = `https://www.anaxhq.com${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://www.anaxhq.com${imageUrl}`;

  const keywordString = keywords.join(', ');

  // Organization structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Anax',
    alternateName: 'AnaxHQ',
    url: 'https://www.anaxhq.com',
    logo: 'https://www.anaxhq.com/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
    description: 'AI-powered SDR platform that handles prospecting, cold emails, and calls automatically',
    foundingDate: '2024',
    sameAs: [
      'https://twitter.com/anaxhq',
      'https://linkedin.com/company/anaxhq'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://www.anaxhq.com'
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Anax" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:site" content="@anaxhq" />
      <meta name="twitter:creator" content="@anaxhq" />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={name} />
      
      {/* Pinterest specific */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="application-name" content="Anax" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
