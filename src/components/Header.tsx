import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header__area}>
      <div className={styles.header__text}>
        <h1 className={styles.header__title}>챠판기 :)</h1>
        <p className={styles.header__subtitle}>Portfolio Vending Machine</p>
      </div>
    </header>
  );
}
