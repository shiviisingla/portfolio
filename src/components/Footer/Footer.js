import Link from 'next/link';
import styles from './Footer.module.scss';

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Education', href: '/education' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <nav className={styles.nav} aria-label="Footer navigation">
          {footerLinks.map(({ label, href }) => (
            <Link key={href} href={href} className={styles.footerLink}>
              {label}
            </Link>
          ))}
        </nav>
        <p className={styles.copy}>
          Built with <span className={styles.heart}>♥</span> by Shivi Singla · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
