import { useEffect, useState } from 'react';
import styles from './Canopy.module.css';

export default function Canopy() {
  const stripeWidth = 60; // px 단위
  const colors = ['stripeBlue', 'stripeWhite'];
  const [stripeCount, setStripeCount] = useState(
    Math.ceil(window.innerWidth / stripeWidth)
  );

  useEffect(() => {
    let frameId: number;

    const handleResize = () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setStripeCount(Math.ceil(window.innerWidth / stripeWidth));
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  const stripes = Array.from({ length: stripeCount }, (_, i) => colors[i % 2]);

  return (
    <div className={styles.canopy} role="presentation" aria-hidden="true">
      <div className={styles.stripes}>
        {stripes.map((cls, i) => (
          <span key={i} className={styles[cls]}></span>
        ))}
      </div>
    </div>
  );
}
