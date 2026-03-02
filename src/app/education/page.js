import Education from '@/components/Education/Education';

export const metadata = {
  title: 'Education',
  description: 'Education and certifications of Shivi Singla – B.Tech Computer Science from Thapar Institute (CGPA 8.1), DSA certification, Python certifications from Coursera.',
  alternates: { canonical: 'https://shivisingla.dev/education' },
  openGraph: {
    title: 'Education – Shivi Singla',
    description: 'B.Tech CS from Thapar Institute, certifications in DSA, Python, and Node.js. DIGISTAR Award recipient.',
    url: 'https://shivisingla.dev/education',
    images: [{ url: '/images/og-image.jpeg', width: 1200, height: 630, alt: 'Education – Shivi Singla' }],
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shivisingla.dev' },
    { '@type': 'ListItem', position: 2, name: 'Education', item: 'https://shivisingla.dev/education' },
  ],
};

export default function EducationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Education />
    </>
  );
}
