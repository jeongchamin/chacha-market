import styles from './Header.module.css';
import logo from '../assets/images/img_logo.svg';

export default function Header() {
  return (
    <header className={styles.header__area}>
      <div className={styles.header__text}>
        <h1 className={styles.header__title}>
          <img src={logo} alt="챠판기"/>
        </h1>
        <p className={styles.header__subtitle}>Portfolio Vending Machine</p>
      </div>
    </header>
  );
}
