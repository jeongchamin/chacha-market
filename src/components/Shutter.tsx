import { useEffect, useState } from 'react';
import styles from './Shutter.module.css';

interface OverlayProps {
  duration?: number; // 보여지는 시간 (ms)
  children?: React.ReactNode;
}

export default function Shutter({ duration = 2000, children }: OverlayProps) {
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
      {children ?? <h1>로딩중...</h1>}
    </div>
  );
}
