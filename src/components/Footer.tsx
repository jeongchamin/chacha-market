import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer__area}>
      <div className={styles.outlet}>
        <div className={styles.outlet__port}>
          <div className={styles.outlet__txt}></div>
        </div>
      </div>
      <p className={styles.footer__copyright}>
        © {new Date().getFullYear()} Chamin. All rights reserved.
      </p>
    </footer>
  );
}
