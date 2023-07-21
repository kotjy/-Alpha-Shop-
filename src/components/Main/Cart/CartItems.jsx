import { cartData } from './Cartdata.jsx'
import plus from '../../../icons/plus.svg'
import minus from '../../../icons/minus.svg'
import styles from "./CartItems.module.css"


export default function CartItems( {id , name , img, price, quantity}) {

return (
  
  <>

    {cartData.map(item =>
           <div  key={item.id} className ={styles.productContainer} data-count={0} data-price={item.price}>

              <img className ={styles.imgContainer} src={item.img}  alt='item' />
              <div className ={styles.productInfo}>
                <div className ={styles.productName}>{item.name}</div>
                <div className ={styles.productControlContainer}>
                  <div className ={styles.productControl}>
                    <input className ={styles.minus} type ='image' src={minus} alt ='minus' value ={-1} /> 
                    
                    <span className ={styles.productCount}>{item.quantity}</span>
                    <input className ={styles.plus} type ='image' src={plus} alt ='plus' value ={1} /> 
                  </div>
                </div>
                <div className={styles.price}>${item.price}</div>
              </div>
            </div>

     )}          
            </>
)

}