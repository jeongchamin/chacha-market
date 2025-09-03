import { useEffect, useState } from 'react';
import styles from './Shutter.module.css';

interface OverlayProps {
  duration?: number; // 보여지는 시간 (ms)
}

export default function Shutter({ duration = 2500 }: OverlayProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      className={`${styles.shutter} ${show ? styles.visible : styles.hidden}`}
    >
      <div className={styles.jjirasi}>
        <div className={styles.jjirasi__info}>
          <p className={styles.jjirasi__quick}>퀵</p>
          <p className={styles.jjirasi__title}>각종 웹페이지<br/>유지•보수•구축</p>
        </div>
        <p className={styles.jjirasi__num}>7117-4595</p>
      </div>
    </div>
  );
}
