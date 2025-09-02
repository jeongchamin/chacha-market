import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer__area}>
      <div>
        <div>
          <p>PUSH</p>
        </div>
      </div>
      <p className={styles.footer__copyright}>
        © {new Date().getFullYear()} Chamin. All rights reserved.
      </p>
    </footer>
  );
}
