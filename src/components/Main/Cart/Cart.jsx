import React, { useState } from "react";
import { dummyProducts } from "./itemData.js";
import styles from "./Cart.module.css"
import CartItem from "./CartItem.jsx";


const Cart = () => {
  const [products, setProducts] = useState([...dummyProducts]);
  function handlePlusClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  function handleMinusClick(productId) {
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter((p) => p.quantity > 0);
    setProducts(nextProducts);
  }

  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className={styles.cart}>
      <section className={styles.cartContainer}>
        <h3 className={styles.cartTitle}>購物籃</h3>

        <section className={styles.productList}>
           {products.map((product) => (
             <CartItem 
            product={product}
            key={product.id}
            onPlus={handlePlusClick}
            onMinus={handleMinusClick}
            />
            ))}

        </section>

        <section className={styles.cartInfo}>
          <div className={styles.text}>運費</div>
          <div className={styles.price}>免費</div>
        </section>
        <section className={styles.cartInfo }>
          <div className={styles.text}>小計</div>
          <div className={styles.price}>${totalPrice.toLocaleString()}</div>
        </section>
      </section>
    </div> 
          
  );
};

export default Cart;

