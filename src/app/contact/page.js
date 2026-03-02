import Contact from '@/components/Contact/Contact';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Shivi Singla – FullStack Software Engineer. Open to new opportunities, collaborations, and discussions about web performance and scalable systems.',
  alternates: { canonical: 'https://shivisingla.dev/contact' },
  openGraph: {
    title: 'Contact – Shivi Singla',
    description: 'Reach out to Shivi Singla via email, LinkedIn, GitHub, or Instagram.',
    url: 'https://shivisingla.dev/contact',
    images: [{ url: '/images/og-image.jpeg', width: 1200, height: 630, alt: 'Contact – Shivi Singla' }],
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shivisingla.dev' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://shivisingla.dev/contact' },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Contact />
    </>
  );
}
