import styles from './Footer.module.css';

export default function Footer() {
  const phoneNumber = "01071174595";
  const message = "안녕하세요! :)";

  const handleClick = () => {
    window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
  };

  return (
    <footer className={styles.footer__area}>
      <div className='container'>
        <div className={styles.outlet} onClick={handleClick}>
          <div className={styles.outlet__dark}>
            <div className={styles.outlet__port}>
              <div className={styles.outlet__txt}></div>
            </div>
          </div>
        </div>
        <p className={styles.footer__copyright}>
          © {new Date().getFullYear()} Chamin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
