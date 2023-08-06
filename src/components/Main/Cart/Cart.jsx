import styles from "./Cart.module.css"
import CartItem from "./CartItem.jsx";


const Cart = () => {

  return (
    <div className={styles.cart}>
      <section className={styles.cartContainer}>
        <h3 className={styles.cartTitle}>購物籃</h3>
        <CartItem />
      </section>
    </div> 
          
  );
};

export default Cart;

