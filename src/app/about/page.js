import About from '@/components/About/About';

export const metadata = {
  title: 'About',
  description: 'Learn about Shivi Singla – FullStack Software Engineer at HT Digital. Skills in Next.js, Node.js, React, Elasticsearch, and performance optimization serving 69M+ users.',
  alternates: { canonical: 'https://shivisingla.dev/about' },
  openGraph: {
    title: 'About Shivi Singla – FullStack Software Engineer',
    description: 'Skills, stats, and background of Shivi Singla. Specializing in Next.js, Node.js, and Core Web Vitals optimization.',
    url: 'https://shivisingla.dev/about',
    images: [{ url: '/images/og-image.jpeg', width: 1200, height: 630, alt: 'About Shivi Singla' }],
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shivisingla.dev' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://shivisingla.dev/about' },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <About />
    </>
  );
}
