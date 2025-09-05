import styles from './Machine.module.css';

export default function Machine(){

    return(
        <div className={styles.machine}>
            <div className={`container ${styles.machineContainer}`}>
                <div className={styles.payStickers}>
                    <ul>
                        <li className={styles.kakaopay}><span className='sr-only'>카카오페이</span></li>
                        <li className={styles.naverpay}><span className='sr-only'>네이버페이</span></li>
                    </ul>
                    <div>
                        
                    </div>
                </div>
                <div className={styles.payInsert}>
                    <div className={styles.payInsert__bills}>
                        <div className={styles.display}>판매중</div>
                        <div className={styles.bill}>
                        <div className={styles.bill__dark}></div>
                        <div className={styles.bill__cover}></div>
                        </div>
                    </div>
                    <div className={styles.payInsert__coins}>
                        <div className={styles.coin__return}>
                            <div className={styles.coin__returnBtn}></div>
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