import { Metadata } from 'next';

// Base URL for the website
export const siteConfig = {
  name: 'Euro Tech EDU - Study Abroad',
  description: 'Expert study abroad consultants in India offering end-to-end guidance for MBBS, Engineering, MBA, and Post-Graduation programs in USA, UK, Germany, Australia, Canada, and more.',
  url: 'https://www.eurotechedu.in',
  ogImage: '/og-image.jpg',
  email: 'info@eurotechedu.in',
  phone: '+91-9004675133',
  address: {
    street: 'Dombivli',
    city: 'Dombivli',
    state: 'Maharashtra',
    zip: '421201',
    country: 'India',
  },
  social: {
    facebook: 'https://facebook.com/eurotechedu',
    instagram: 'https://instagram.com/eurotechedu',
    linkedin: 'https://linkedin.com/company/eurotechedu',
    youtube: 'https://youtube.com/@eurotechedu',
  },
};

// Default metadata for all pages
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'study abroad consultant India',
    'MBBS abroad for Indian students',
    'engineering abroad',
    'MBA abroad',
    'post graduation abroad',
    'overseas education consultant',
    'study abroad 2026',
    'international education',
    'study in USA',
    'study in UK',
    'study in Germany',
    'study in Australia',
    'study in Canada',
    'NMC approved universities',
    'affordable MBBS abroad',
    'free consultation study abroad',
  ],
  authors: [{ name: 'Euro Tech EDU' }],
  creator: 'Euro Tech EDU',
  publisher: 'Euro Tech EDU',
  category: 'Education',
  classification: 'Business',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
      'en': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    alternateLocale: ['en_US', 'en_GB'],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Euro Tech EDU - Study Abroad Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@eurotechedu',
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  other: {
    'theme-color': '#0066cc',
    'msapplication-TileColor': '#0066cc',
    'msapplication-config': '/browserconfig.xml',
  },
};

// Page-specific metadata

export const homeMetadata: Metadata = {
  title: '#1 Study Abroad Consultant in India | MBBS, Engineering, MBA | Euro Tech EDU',
  description: 'Expert study abroad consultants in India. End-to-end guidance for MBBS, Engineering & MBA programs in USA, UK, Germany, Australia, Canada. 500+ successful placements. Free consultation available.',
  keywords: [
    'study abroad consultant India',
    'best overseas education consultant',
    'MBBS abroad for Indian students',
    'engineering abroad',
    'MBA abroad',
    'study abroad 2026-27',
    'euro tech edu',
    'study abroad free consultation',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Euro Tech EDU | #1 Study Abroad Consultant in India',
    description: 'Expert study abroad consultants in India. End-to-end guidance for MBBS, Engineering & MBA programs in USA, UK, Germany, Australia. 500+ successful placements.',
    url: siteConfig.url,
  },
};

export const mbbsMetadata: Metadata = {
  title: 'MBBS Abroad for Indian Students 2026 | NMC Approved Universities | Low Fees',
  description: 'Study MBBS abroad at NMC approved universities. Affordable medical degrees in Georgia, UK, Germany, USA, Australia. No donation/capitation fees. FMGE/NEXT preparation support. 2026-27 intake open. Apply now!',
  keywords: [
    'MBBS abroad for Indian students',
    'NMC approved universities abroad',
    'MBBS in Georgia',
    'MBBS in UK',
    'MBBS in Germany',
    'MBBS abroad low fees',
    'MBBS abroad without NEET',
    'MBBS abroad 2026',
    'FMGE coaching',
    'medical degree abroad',
    'study medicine abroad',
    'affordable MBBS',
    'MBBS abroad admission',
  ],
  alternates: {
    canonical: '/programs/mbbs',
  },
  openGraph: {
    title: 'MBBS Abroad for Indian Students 2026 | NMC Approved | Euro Tech EDU',
    description: 'Study MBBS abroad at NMC approved universities. Affordable options in Georgia, UK, Germany. No donation fees. 2026 intake open.',
    url: `${siteConfig.url}/programs/mbbs`,
  },
};

export const engineeringMetadata: Metadata = {
  title: 'Engineering Abroad for Indian Students | Top Universities 2026 | Free Consultation',
  description: 'Study Engineering abroad at top global universities. Practical learning, paid internships & PR pathways. USA, Germany, Canada, Australia options. Free profile evaluation and admission guidance.',
  keywords: [
    'engineering abroad for Indian students',
    'study engineering abroad',
    'B.Tech abroad',
    'engineering in Germany',
    'engineering in USA',
    'engineering in Canada',
    'engineering abroad scholarships',
    'computer science abroad',
    'mechanical engineering abroad',
    'STEM programs abroad',
    'engineering abroad fees',
    'best engineering universities abroad',
  ],
  alternates: {
    canonical: '/programs/engineering',
  },
  openGraph: {
    title: 'Engineering Abroad | Top Universities 2026 | Euro Tech EDU',
    description: 'Study Engineering abroad at top global universities. Practical learning, paid internships & PR pathways. Free consultation.',
    url: `${siteConfig.url}/programs/engineering`,
  },
};

export const mbaMetadata: Metadata = {
  title: 'MBA Abroad for Indian Students | Top B-Schools 2026 | High ROI | Free Consultation',
  description: 'MBA abroad programs for Indian students. Top B-schools in USA, UK, Australia, Canada, Germany. 1-year MBA options available. Global networking & post-study work visas. Free consultation.',
  keywords: [
    'MBA abroad for Indian students',
    'study MBA abroad',
    'MBA in USA',
    'MBA in UK',
    'MBA in Australia',
    'MBA in Canada',
    'MBA in Germany',
    '1 year MBA abroad',
    'executive MBA abroad',
    'MBA abroad without GMAT',
    'MBA abroad fees',
    'top B schools abroad',
    'MBA scholarships abroad',
    'post study work visa MBA',
  ],
  alternates: {
    canonical: '/programs/mba',
  },
  openGraph: {
    title: 'MBA Abroad | Top B-Schools 2026 | Euro Tech EDU',
    description: 'MBA abroad programs for Indian students. Top B-schools in USA, UK, Australia. 1-year options. Global networking & post-study work visas.',
    url: `${siteConfig.url}/programs/mba`,
  },
};

// Helper function to generate breadcrumb schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Helper function to generate FAQ schema
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
