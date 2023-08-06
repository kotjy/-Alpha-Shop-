import styles from  './CartItem.module.css'
import { ReactComponent as IconPlus } from '../../../icons/plus.svg'
import { ReactComponent as IconMinus } from '../../../icons/minus.svg'
import { useContext } from 'react'
import {CartContext} from '../../../context/CartContext'



function Product ({product}) {

const {handlePlus, handleMinus} = useContext(CartContext)


  return(
  <div key={product.id} id={product.id} className={styles.productContainer}>
        <img className={styles.imgContainer} src={product.img} alt={product.name} />
          <div className={styles.productInfo}>
        
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productControlContainer}>
              <div className={styles.productControl}>
                
                  <IconMinus className={styles.minus}
                  onClick={() => handleMinus(product.id)} />
                
                <span className={styles.productCount}>{product.quantity}</span>
                
                  <IconPlus className={styles.plus} 
                  onClick={() => handlePlus(product.id)} />
                
              </div>
            </div>
            <div className={styles.price}>
              ${(product.price * product.quantity)} 
            </div>
          </div>
        </div>
        )
}


function CartItem (){
  const {currentProduct , allPrice, shippingPrice} = useContext(CartContext)

  return(

        <><section className={styles.productList}>
      {currentProduct.map((product) => (
        <Product
          product={product}
          key={product.id} />
      ))}

    </section><section className={styles.cartInfo}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>
          {shippingPrice === 0 ? "免費" : "$" + shippingPrice}
        </div>
      </section><section className={styles.cartInfo}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>${allPrice}</div>
      </section></>
   
  )
}
export default CartItem;