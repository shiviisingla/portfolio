import { Inter, Fira_Code } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import '@/styles/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500'],
});

const siteUrl = 'https://shivisingla.dev';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Shivi Singla – FullStack Software Engineer | Next.js, Node.js, React',
    template: '%s | Shivi Singla',
  },
  description:
    'Shivi Singla is a FullStack Software Engineer at HT Digital specializing in Next.js, Node.js, React, and performance optimization. Building systems serving 69M+ users and 300M+ monthly pageviews. Previously at Apple.',
  keywords: [
    'Shivi Singla', 'Shivi Singla portfolio', 'Shivi Singla software engineer',
    'FullStack Software Engineer', 'Software Engineer India', 'Next.js developer',
    'Node.js developer', 'React developer', 'Performance Optimization',
    'Core Web Vitals', 'HT Digital engineer', 'Apple intern', 'Thapar University',
    'Full Stack Developer India', 'JavaScript developer', 'Elasticsearch',
    'SEO engineer', 'Web Performance', 'Chandigarh developer',
  ],
  authors: [{ name: 'Shivi Singla', url: siteUrl }],
  creator: 'Shivi Singla',
  publisher: 'Shivi Singla',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Shivi Singla – Software Engineer Portfolio',
    title: 'Shivi Singla – FullStack Software Engineer | Next.js, Node.js, React',
    description:
      'FullStack Software Engineer at HT Digital building high-performance web systems serving 69M+ users. Ex-Apple. Specializing in Next.js, Node.js, and Core Web Vitals optimization.',
    images: [{ url: '/images/og-image.jpeg', width: 1200, height: 630, alt: 'Shivi Singla – FullStack Software Engineer Portfolio', type: 'image/jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivi Singla – FullStack Software Engineer',
    description: 'Building high-performance web systems serving 69M+ users and 300M+ monthly pageviews.',
    images: ['/images/og-image.jpeg'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: 'Shivi Singla',
  givenName: 'Shivi',
  familyName: 'Singla',
  jobTitle: 'FullStack Software Engineer',
  description: 'FullStack Software Engineer specializing in Next.js, Node.js, React, and performance optimization.',
  url: siteUrl,
  email: 'shivisingla2011@gmail.com',
  image: `${siteUrl}/images/profile/avatar.jpeg`,
  address: { '@type': 'PostalAddress', addressLocality: 'Chandigarh', addressRegion: 'Chandigarh', addressCountry: 'IN' },
  sameAs: [
    'https://www.linkedin.com/in/shivi-singla-5676131a0/',
    'https://github.com/shiviisingla',
    'https://www.instagram.com/shiviisingla/',
    'https://www.youtube.com/@thehomestylecooking6663',
  ],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Thapar Institute of Engineering & Technology', url: 'https://www.thapar.edu/' },
  worksFor: { '@type': 'Organization', name: 'HT Digital (HT Media Group)', url: 'https://www.htdigital.in/' },
  knowsAbout: ['JavaScript', 'Next.js', 'React.js', 'Node.js', 'Express.js', 'Elasticsearch', 'Python', 'SQL', 'MongoDB', 'MySQL', 'Core Web Vitals', 'SEO', 'Performance Optimization', 'AWS', 'Redis', 'Akamai'],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'Shivi Singla – FullStack Software Engineer',
  description: 'Portfolio of Shivi Singla, a FullStack Software Engineer specializing in Next.js, Node.js, and performance optimization.',
  author: { '@id': `${siteUrl}/#person` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${firaCode.variable}`} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </head>
      <body style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
