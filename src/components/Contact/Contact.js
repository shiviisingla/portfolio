import { personal } from '@/data/portfolio';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className="container">
        <h2 className="section__title">Get In Touch</h2>

        <p className={styles.infoText}>
          I&apos;m always open to discussing new opportunities, interesting projects,
          or just having a chat about web performance and scalable systems.
        </p>

        <div className={styles.links}>
          <a href={`mailto:${personal.email}`} className={styles.contactLink}>
            <span className={styles.icon}>✉️</span>
            {personal.email}
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <span className={styles.icon}>💼</span>
            LinkedIn
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <span className={styles.icon}>🐙</span>
            GitHub
          </a>
          <a href={personal.instagram} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <span className={styles.icon}>📷</span>
            Instagram
          </a>
          <a href={personal.youtube} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <span className={styles.icon}>🎬</span>
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
