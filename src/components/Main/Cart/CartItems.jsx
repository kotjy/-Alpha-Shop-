import { ItemData } from './ItemData.jsx' 
import Plus from '../../../icons/plus.svg'
import Minus from '../../../icons/minus.svg'
import styles from "./CartItems.module.css"



{/*export default function CartItems({ products, onPlus, onMinus }) {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} id={product.id} className={styles.productContainer}>
          <img className={styles.imgContainer} src={product.img} alt={product.name} />
          <div className={styles.productInfo}>
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productControlContainer}>
              <div className={styles.productControl}>
                <svg
                  className={styles.minus}
                  onClick={() => {
                    onMinus(product.id);
                  }}
                >
                  <Minus />
                </svg>
                <span className={styles.productCount}>{product.quantity}</span>
                <svg
                  className={styles.plus}
                  onClick={() => {
                    onPlus(product.id);
                  }}
                >
                  <Plus />
                </svg>
              </div>
            </div>
            <div className={styles.price}>
              ${(product.price * product.quantity).toLocaleString()}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}*/}