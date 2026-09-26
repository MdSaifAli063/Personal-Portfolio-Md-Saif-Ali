import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#039efe',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'Md Saif Ali | Full-Stack & AI Developer — Portfolio',
  description:
    'Portfolio of Md Saif Ali — Full-Stack & AI Developer based in Bangalore. Building scalable web apps with React, Python, Node.js, and AI workflows. Available for opportunities & freelance.',
  keywords: [
    'Md Saif Ali',
    'Full-Stack Developer',
    'AI Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js',
    'Python',
    'Web Developer Bangalore',
    'Portfolio',
    'MdSaifAli063',
    'Freelance Developer',
  ],
  authors: [{ name: 'Md Saif Ali', url: 'https://personal-portfolio-md-saif-ali.vercel.app/' }],
  creator: 'Md Saif Ali',
  publisher: 'Md Saif Ali',
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
    canonical: 'https://personal-portfolio-md-saif-ali.vercel.app/',
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
    siteName: 'Md Saif Ali — Portfolio',
    title: 'Md Saif Ali | Full-Stack & AI Developer',
    description:
      'Full-Stack & AI Developer based in Bangalore. Building scalable web apps with React, Python, Node.js, and intelligent AI workflows. Available for opportunities & freelance.',
    url: 'https://personal-portfolio-md-saif-ali.vercel.app/',
    images: [
      {
        url: 'https://personal-portfolio-md-saif-ali.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Md Saif Ali — Full-Stack & AI Developer Portfolio',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Md_Saif_Ali_063',
    creator: '@Md_Saif_Ali_063',
    title: 'Md Saif Ali | Full-Stack & AI Developer',
    description:
      'Full-Stack & AI Developer building scalable web apps with React, Python, Node.js, and AI workflows. Available for freelance.',
    images: ['https://personal-portfolio-md-saif-ali.vercel.app/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Md Saif Ali',
  url: 'https://personal-portfolio-md-saif-ali.vercel.app/',
  image: 'https://personal-portfolio-md-saif-ali.vercel.app/og-image.png',
  logo: 'https://personal-portfolio-md-saif-ali.vercel.app/saifalogo.png',
  jobTitle: 'Full-Stack & AI Developer',
  description:
    'Full-Stack & AI Developer based in Bangalore, India. Building scalable web applications with clean UI, intelligent AI workflows, and robust backend architectures.',
  email: 'mdsaifali6303@gmail.com',
  telephone: '+91 9031228966',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://github.com/MdSaifAli063',
    'https://www.linkedin.com/in/mdsaifali063',
    'https://www.x.com/@Md_Saif_Ali_063',
    'https://www.instagram.com/md_saif_ali_063',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'Full-Stack Development',
    'AI Development',
    'Web Development',
    'UI/UX Design',
  ],
  alumniOf: {
    '@type': 'Organization',
    name: 'Bangalore',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0a0f1f] text-[#c7d2fe] font-['Inter',sans-serif] selection:bg-[#039efe] selection:text-white relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
