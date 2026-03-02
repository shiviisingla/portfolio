import Experience from '@/components/Experience/Experience';

export const metadata = {
  title: 'Experience',
  description: 'Work experience of Shivi Singla – SDE-2 at HT Digital, ex-Apple intern. Led Next.js migration for LiveHindustan.com serving 69M+ users, built scalable Node.js APIs and SEO pipelines.',
  alternates: { canonical: 'https://shivisingla.dev/experience' },
  openGraph: {
    title: 'Experience – Shivi Singla',
    description: 'Professional experience at HT Digital, Apple, and Coding Ninjas. Performance optimization, Next.js migration, and scalable systems.',
    url: 'https://shivisingla.dev/experience',
    images: [{ url: '/images/og-image.jpeg', width: 1200, height: 630, alt: 'Experience – Shivi Singla' }],
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shivisingla.dev' },
    { '@type': 'ListItem', position: 2, name: 'Experience', item: 'https://shivisingla.dev/experience' },
  ],
};

export default function ExperiencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Experience />
    </>
  );
}
