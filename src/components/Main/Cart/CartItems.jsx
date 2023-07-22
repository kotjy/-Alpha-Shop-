import { itemData } from './itemData.jsx' 
import plus from '../../../icons/plus.svg'
import minus from '../../../icons/minus.svg'
import styles from "./CartItems.module.css"



function Product ( {id , name , img, price, quantity}) {

  return (

    <div  className ={styles.productContainer} data-count={0} data-price={price}>

              <img className ={styles.imgContainer} src={img}  alt={name} />
              <div className ={styles.productInfo}>
                <div className ={styles.productName}>{name}</div>
                <div className ={styles.productControlContainer}>
                  <div className ={styles.productControl}>
                    <input className ={styles.minus} type ='image' src={minus} alt ='minus' value ={-1} /> 
                    
                    <span className ={styles.productCount}>{quantity}</span>
                    <input className ={styles.plus} type ='image' src={plus} alt ='plus' value ={1} /> 
                  </div>
                </div>
                <div className={styles.price}>${price}</div>
              </div>
            </div>   

  )
}


function CartItems() {

return (
  <section className ={styles.productList} data-total-price={0}>
          { itemData.map( item => 
      <Product {...item} key ={item.id} />
      )}
  </section>
    
)

}

export default CartItems;