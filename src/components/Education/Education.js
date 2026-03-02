import Image from 'next/image';
import { education, certifications, achievements } from '@/data/education';
import styles from './Education.module.scss';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section__title">Education</h2>

        <div className={styles.grid}>
          {education.map((edu, i) => (
            <div key={i} className={styles.card}>
              <Image
                src={edu.logo}
                alt={`${edu.institution} logo`}
                width={56}
                height={56}
                className={styles.logo}
                loading="lazy"
              />
              <div>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <a
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.institution}
                >
                  {edu.institution}
                </a>
                <p className={styles.meta}>
                  {edu.grade}
                  {edu.period && ` · ${edu.period}`}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Certifications</h3>
          <div className={styles.certList}>
            {certifications.map((cert, i) => (
              <div key={i} className={styles.certItem}>
                <div className={styles.certInfo}>
                  <span className={styles.certName}>
                    {cert.url ? (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer">{cert.name}</a>
                    ) : cert.name}
                  </span>
                  <span className={styles.certProvider}>{cert.provider}</span>
                </div>
                {cert.image && (
                  <Image
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    width={80}
                    height={50}
                    className={styles.certImage}
                    loading="lazy"
                  />
                )}
                {cert.url && (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className={styles.certLink}>
                    View ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Achievements</h3>
          <div className={styles.certList}>
            {achievements.map((a, i) => (
              <div key={i} className={styles.achieveItem}>
                <span className={styles.trophy}>🏆</span>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
