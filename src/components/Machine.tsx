import {useState, useRef} from 'react';
import styles from './Machine.module.css';

export default function Machine(){
    const [text, setText] = useState("판매중");
    const timerRef = useRef<number | null>(null); 
  
    const handleClick = (newText: string) => {
      setText(newText);
  
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
  
      timerRef.current = window.setTimeout(() => {
        setText("판매중");
        timerRef.current = null;
      }, 3000);
    };

    return(
        <div className={styles.machine}>
            <div className={`container ${styles.machineContainer}`}>
                <div className={styles.payStickers}>
                    <ul>
                        <li className={styles.kakaopay} onClick={() => handleClick('카카오페이 X')}><span className='sr-only'>카카오페이</span></li>
                        <li className={styles.naverpay} onClick={() => handleClick('네이버페이 X')}><span className='sr-only'>네이버페이</span></li>
                    </ul>
                    <div>
                        
                    </div>
                </div>
                <div className={styles.payInsert}>
                    <div className={styles.payInsert__bills} onClick={() => handleClick('5만원권 가능')}>
                        <div className={styles.display}>{text}</div>
                        <div className={styles.bill}>
                        <div className={styles.bill__dark}></div>
                        <div className={styles.bill__cover}></div>
                        </div>
                    </div>
                    <div className={styles.payInsert__coins}>
                        <div className={styles.coin__return}>
                            <div className={styles.coin__returnBtn} onClick={() => handleClick('반환불가')}></div>
                        </div>
                        <div className={styles.coin__slot}>
                            <div className={styles.coin}></div>
                        </div>
                    </div>
                
                </div>
            </div>
            
        </div>
    );


}