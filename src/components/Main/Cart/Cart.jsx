import React, { useState } from "react";
import { dummyProducts } from "./itemData.jsx";
import { ReactComponent as IconPlus } from '../../../icons/plus.svg'
import { ReactComponent as IconMinus } from '../../../icons/minus.svg'
import styles from "./Cart.module.css"


function CartItems({ products, onPlus, onMinus }) {
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
      ))}
    </>
  );
} 

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
        <h3 className={styles.cardTitle}>購物籃</h3>

        <section className={styles.productList}>
          <CartItems
            products={products}
            onPlus={handlePlusClick}
            onMinus={handleMinusClick}
          />
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

