import styles from  './CartItem.module.css'
import { ReactComponent as IconPlus } from '../../../icons/plus.svg'
import { ReactComponent as IconMinus } from '../../../icons/minus.svg'


function CartItem ({ product, onPlus, onMinus }) {
  return(
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
                  <IconMinus />
                </svg>
                <span className={styles.productCount}>{product.quantity}</span>
                <svg
                  className={styles.plus}
                  onClick={() => {
                    onPlus(product.id);
                  }}
                >
                  <IconPlus />
                </svg>
              </div>
            </div>
            <div className={styles.price}>
              ${(product.price * product.quantity).toLocaleString()}
            </div>
          </div>
        </div>
        )
}

export default CartItem;