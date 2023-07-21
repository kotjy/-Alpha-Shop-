import CartItems from "./CartItems.jsx";
import styles from "./Cart.module.css"

export default function Cart() {

return(
   <>
 
          <h3 className ={styles.cartTitle}>購物籃</h3>
          <section className ={styles.productList} data-total-price={0}>
           <CartItems />
          </section>

          <section className = {`${styles.cartInfo} ${styles.shipping}`}>
            <div className={styles.text}>運費</div>
            <div className={styles.price}>免費</div>
          </section>

          <section className = {`${styles.cartInfo} ${styles.total}`}>
            <div className={styles.text}>小計</div>
            <div className={styles.price}>$0</div>
          </section>

</>

)

}