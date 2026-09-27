import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://mdsaifali.me';
const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;
const webpageId = `${siteUrl}/#webpage`;

export const viewport: Viewport = {
  themeColor: '#039efe',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Md Saif Ali | Full-Stack & AI Developer in Bangalore',
  description:
    'Md Saif Ali is a Bangalore-based full-stack and AI developer building web applications, AI agents, and LLM-powered products with React, Next.js, Node.js, and Python.',
  keywords: [
    'Md Saif Ali',
    'Full-Stack Developer',
    'AI Developer',
    'software engineer Bangalore',
    'full-stack developer Bangalore',
    'AI developer India',
    'React and Next.js developer',
    'Node.js developer',
    'Python developer',
    'LLM and AI agent development',
    'web application development',
    'MdSaifAli063',
  ],
  applicationName: 'Md Saif Ali Portfolio',
  authors: [{ name: 'Md Saif Ali', url: siteUrl }],
  creator: 'Md Saif Ali',
  publisher: 'Md Saif Ali',
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2' },
      { url: '/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png?v=2', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png?v=2', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png?v=2', sizes: '180x180' }],
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png?v=2', sizes: '192x192' },
      { rel: 'android-chrome', url: '/android-chrome-512x512.png?v=2', sizes: '512x512' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    siteName: 'Md Saif Ali Portfolio',
    title: 'Md Saif Ali | Full-Stack & AI Developer in Bangalore',
    description: 'Explore the projects, skills, experience, and AI engineering work of Md Saif Ali, a full-stack and AI developer based in Bangalore, India.',
    url: '/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Md Saif Ali, full-stack and AI developer',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Md_Saif_Ali_063',
    creator: '@Md_Saif_Ali_063',
    title: 'Md Saif Ali | Full-Stack & AI Developer in Bangalore',
    description: 'Full-stack web development, AI agents, and LLM-powered applications by Md Saif Ali in Bangalore, India.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': personId,
      name: 'Md Saif Ali',
      url: siteUrl,
      image: `${siteUrl}/portfolioimg.png`,
      jobTitle: 'Full-Stack & AI Developer',
      description: 'Bangalore-based full-stack and AI developer building web applications, AI agents, and LLM-powered products.',
      email: 'mdsaifali6303@gmail.com',
      telephone: '+91 9031228966',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://github.com/MdSaifAli063',
        'https://www.linkedin.com/in/mdsaifali063',
        'https://x.com/Md_Saif_Ali_063',
        'https://www.instagram.com/md_saif_ali_063',
      ],
      knowsAbout: [
        'Full-stack web development',
        'Artificial intelligence',
        'AI agents and large language models',
        'React and Next.js',
        'Node.js',
        'Python',
        'Flask and Django',
        'PostgreSQL',
      ],
      mainEntityOfPage: { '@id': webpageId },
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: siteUrl,
      name: 'Md Saif Ali Portfolio',
      description: 'Portfolio of Md Saif Ali, a full-stack and AI developer based in Bangalore, India.',
      inLanguage: 'en-IN',
      publisher: { '@id': personId },
    },
    {
      '@type': 'ProfilePage',
      '@id': webpageId,
      url: siteUrl,
      name: 'Md Saif Ali | Full-Stack & AI Developer in Bangalore',
      isPartOf: { '@id': websiteId },
      mainEntity: { '@id': personId },
      inLanguage: 'en-IN',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://unicons.iconscout.com" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `if(typeof Element!=='undefined'&&Element.prototype.releasePointerCapture){const orig=Element.prototype.releasePointerCapture;Element.prototype.releasePointerCapture=function(id){try{if(this.hasPointerCapture&&this.hasPointerCapture(id)){orig.call(this,id);}}catch(e){}};};`,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#0a0f1f] text-[#c7d2fe] font-['Inter',sans-serif] selection:bg-[#039efe] selection:text-white relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
