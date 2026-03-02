import Image from 'next/image';
import { experience } from '@/data/experience';
import styles from './Experience.module.scss';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section__title">Experience</h2>

        <div className={styles.timeline}>
          {experience.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.header}>
                {exp.logo && (
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={44}
                    height={44}
                    className={styles.logo}
                  />
                )}
                <div className={styles.headerText}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>
                    {exp.companyUrl ? (
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </p>
                  <p className={styles.meta}>{exp.period} · {exp.location}</p>
                </div>
              </div>

              <ul className={styles.bullets}>
                {exp.bullets.map((b, j) => (
                  <li key={j} className={styles.bullet}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
