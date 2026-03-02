import Projects from '@/components/Projects/Projects';

export const metadata = {
  title: 'Projects',
  description: 'Projects by Shivi Singla – LiveHindustan.com Next.js migration, Teradata-to-Spark SQL converter at Apple, compliance automation, and cross-platform data validation tools.',
  alternates: { canonical: 'https://shivisingla.dev/projects' },
  openGraph: {
    title: 'Projects – Shivi Singla',
    description: 'Featured projects including LiveHindustan.com (69M+ users), SQL converters, and automation tools built at HT Digital and Apple.',
    url: 'https://shivisingla.dev/projects',
    images: [{ url: '/images/og-image.jpeg', width: 1200, height: 630, alt: 'Projects – Shivi Singla' }],
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shivisingla.dev' },
    { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://shivisingla.dev/projects' },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Projects />
    </>
  );
}
