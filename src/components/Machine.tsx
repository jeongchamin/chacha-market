import styles from './Machine.module.css';

export default function Machine(){

    return(
        <div>
            <div className={styles.payStickers}>
                <ul>
                    <li className={}>카카오페이</li>
                    <li>네이버페이</li>
                </ul>
                <div className={}>
                    
                </div>
            </div>
            <div className={styles.payInsert}>
                <div>
                    <div className={styles.payInsert__bills}>
                        <div>판매중</div>
                        <div></div>
                    </div>
                    <div className={styles.payInsert__coins}></div>
                </div>
                
            </div>
        </div>
    );


}