import { useState } from 'react';
import styles from './ProductCard.module.css';
import { products } from '../data/products';
import type { Product } from '../data/products';
import Modal from './Modal';

export default function ProductCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // ✅ 타입 지정

  return (
    <div className={styles.product__area}>
      <ul className={styles.product__list}>
        {products.map((product) => (
          <li key={product.id} className={styles.product}>
            <div className={styles.product__bg}></div>
            <h3 className={styles.product__name}>{product.name}</h3>
            <img
              src={product.image}
              alt={product.name}
              className={`${styles.product__img} ${
                styles['product__img' + product.id]
              }`}
            />
            <button
              onClick={() => {
                setSelectedProduct(product); // 클릭된 product 저장
                setIsModalOpen(true); // 모달 열기
              }}
              className={styles.product__btn}
            >플러스
            </button>
          </li>
        ))}
      </ul>

      {/* Modal에 선택된 product 전달 */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
}
