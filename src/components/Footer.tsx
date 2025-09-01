import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer__area}>
      <p className={styles.footer__brand}>챠챠챠 마켙</p>

      <div className={styles.footer__care}>
        <p>취급주의</p>
        <span>HANDLE WITH CARE</span>
      </div>
      <div className={styles.footer__fragile}>
        <p>파손주의</p>
        <span>FRAGILE</span>
      </div>
      <p className={styles.footer__copyright}>
        © {new Date().getFullYear()} Chamin. All rights reserved.
      </p>
    </footer>
  );
}
