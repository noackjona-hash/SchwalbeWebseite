import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.column}>
          <h3 className={styles.title}>RSV "Schwalbe" Ellmendingen e. V.</h3>
          <p className={styles.text}>
            Der Radsportverein in Baden.<br />
            Mit Tradition und Leidenschaft für den Radsport seit über 125 Jahren.
          </p>
        </div>
        <div className={styles.column}>
          <h4 className={styles.subtitle}>Links</h4>
          <ul className={styles.linkList}>
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
            <li><Link href="/sponsoren">Sponsoren</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} RSV Schwalbe Ellmendingen e. V.</p>
      </div>
    </footer>
  );
}
