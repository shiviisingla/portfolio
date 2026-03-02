import Hero from '@/components/Hero/Hero';
import { highlights } from '@/data/portfolio';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section" aria-label="Key highlights">
        <div className="container">
          <h2 className="section__title">Impact at a Glance</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {highlights.map(({ label, value }) => (
              <div key={label} style={{
                flex: '1 1 140px',
                textAlign: 'center',
                padding: '1rem',
                border: '1px solid var(--border-color, #2d2d44)',
                borderRadius: '10px',
              }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800 }}>{value}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '0.25rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
