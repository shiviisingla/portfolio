import { personal, skills, highlights, techHighlights } from '@/data/portfolio';
import styles from './About.module.scss';

export default function About() {
  const skillGroups = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frameworks', items: skills.frameworks },
    { title: 'Databases', items: skills.databases },
    { title: 'Tools', items: skills.tools },
    { title: 'Web & SEO', items: skills.webSeo },
  ];

  return (
    <section id="about" className={`${styles.about} section`}>
      <div className="container">
        <h2 className="section__title">About Me</h2>

        <p className={styles.bio}>{personal.bio}</p>

        <div className={styles.techList}>
          {techHighlights.map((t) => (
            <span key={t} className={styles.techTag}>{t}</span>
          ))}
        </div>

        <div className={styles.stats}>
          {highlights.map(({ label, value }) => (
            <div key={label} className={styles.statCard}>
              <div className={styles.statValue}>{value}</div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>

        <div className={styles.skillsWrap}>
          {skillGroups.map(({ title, items }) => (
            <div key={title} className={styles.skillRow}>
              <span className={styles.skillLabel}>{title}</span>
              {items.map((item) => (
                <span key={item} className={styles.techTag}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
