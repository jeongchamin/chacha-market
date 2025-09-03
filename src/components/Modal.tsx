import { useState } from 'react';
import styles from './Modal.module.css';
import imgBarcode from '../assets/images/img_barcode.svg';
import imgBarcodeScanner from '../assets/images/img_barcodeScanner.png';
import type { Product } from '../data/products';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
};

export default function Modal({ isOpen, onClose, product }: ModalProps) {
  const [flipped, setFlipped] = useState(false);
  const [showLinkImage, setShowLinkImage] = useState(false);

  if (!isOpen || !product) return null;

  // 바코드 클릭 → 이미지 등장 → 애니메이션 → 링크 이동
  const handleBarcodeClick = () => {
    setShowLinkImage(true);

    setTimeout(() => {
      const imageEl = document.querySelector(`.${styles.linkImage}`);
      imageEl?.classList.add(styles.active);

      setTimeout(() => {
        window.open(product.link, '_blank'); // 링크 이동
        setShowLinkImage(false); // 이미지 제거
      }, 1000); // 애니메이션 지속 시간
    }, 100); // 이미지 등장 후 약간 딜레이
  };

  return (
    <div className={styles.modal__overlay}>
      <div className={`${styles.modal__card} ${flipped ? styles.flipped : ''}`}>
        <div className={styles.modal__front}>
          <h2 className="sr-only">Front Side</h2>
          <div className={styles.front__top}>
            <div className={styles.front__top__inner}>
              <p className={styles.linebox}>
                소비자기본법에 의거 교환 또는 보상 불가
              </p>
              <p className={styles.linebox}>
                반품 및 교환 장소 : 챠챠챠마켙 및 구입처
              </p>
              <div className={styles.pfInfo}>
                <p className={styles.pfNum}>No.00CHA{product.id}</p>
                <p className={styles.pfCode}>{product.code}</p>
              </div>
            </div>
          </div>
          <div className={styles.front__bottom}>
            <div className={styles.front__bottom__inner}>
              <p className={styles.fullbox}>
                <span className={styles.boxTitle}>
                  프로젝트명 / Project Name / プロジェクト
                </span>
                <span className={styles.bold}>{product.name}</span>
              </p>
              <p className={styles.fullbox}>
                <span className={styles.boxTitle}>작업일 / Date / 期間</span>
                <span className={styles.bold}>{product.date}</span>
              </p>
              <p className={styles.fullbox}>
                <span className={styles.boxTitle}>소속 / Company / 会社名</span>
                <span className={styles.bold}>{product.company}</span>
              </p>
              <p className={styles.fullbox}>
                <span className={styles.boxTitle}>담당업무 / Role / 範囲</span>
                <span className={styles.bold}>{product.role}</span>
              </p>
              <p className={styles.fullbox}>
                <span className={styles.boxTitle}>
                  사용 툴 / Tools / ツール
                </span>
                <span className={styles.bold}>{product.tools}</span>
              </p>

              <button
                onClick={() => setFlipped(!flipped)}
                className={styles.flipBtn}
              ></button>
              <button onClick={onClose} className={styles.closeBtn}></button>

              <div className={styles.barcodeWrapper}>
                <button onClick={handleBarcodeClick} className={styles.barcode}>
                  <img src={imgBarcode} alt="바코드링크" />
                  <p className={styles.barcode__num}>{product.barcode}</p>
                </button>

                {showLinkImage && (
                  <div className={styles.linkImage}>
                    <img src={imgBarcodeScanner} alt="바코드스캐너" />
                    <span className={styles.redLine}></span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.modal__back}>
          <h2 className="sr-only">Back Side</h2>
          <div className={styles.back__top}>
            <div className={styles.design}>
              <img src={product.design} alt="" className={styles.design__img} />
            </div>
            <div className={styles.back__top__inner}></div>
          </div>
          <div className={styles.back__bottom}>
            <div className={styles.back__bottom__inner}>
              <p className={styles.caution}>
                해당 시안은 고온다습, 직사광선을 피해 서늘한곳에 보관 하시고,
                내용물이 변질되었을 경우 응용하지 마십시오.
              </p>
              <button
                onClick={() => setFlipped(!flipped)}
                className={styles.flipBtn}
              ></button>
              <button onClick={onClose} className={styles.closeBtn}></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
