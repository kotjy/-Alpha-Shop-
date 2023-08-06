import styles from "./StepTwo.module.css"
import {useState, useContext, useEffect} from "react"
import {CartContext} from "../../../../context/CartContext" 


function StepTwo () {

  const {
    addShippingPrice,
    lastelectedShipping,
    updatedShippingPrice
  } = useContext(CartContext)

  const [shipping, setShipping] = useState(lastelectedShipping)

  useEffect(() => {
    setShipping(lastelectedShipping);
  }, [lastelectedShipping]);


  const handleSelectedShipping =(e) => {
    const selectedShipping = e.target.id;
    setShipping(selectedShipping);
    if(selectedShipping === "standard") {
      addShippingPrice(0);
    }else if (selectedShipping ==="DHL") {
      addShippingPrice(500);
    }
    updatedShippingPrice(selectedShipping)
  }

  return ( 

    <form  data-phase="shipping">
              <h3 className={styles.formTitle}>運送方式</h3>
              <section className={styles.formBody}>
                <label className={styles.RadioGroup} onClick ={ () => addShippingPrice(0)}>
                  <input className={styles.inputStyle} id="standard"
            type="radio"
            name="shipping"
            checked={shipping === "standard"}
            onChange={handleSelectedShipping}
          />

                  <div className={styles.radioInfo}>
                    <div>
                      <div className={styles.text}>標準運送</div>
                      <div className={styles.price}></div>
                    </div>
                    <div className={styles.period}>約 3~7 個工作天</div>
                  </div>
                  <div className={styles.radioBoxBorder}>
                  </div>
                </label>

                <label className={styles.RadioGroup} onClick={() => addShippingPrice(500)}>
                  <input className={styles.inputStyle} id="DHL" type="radio" name="shipping" 
                  checked={shipping === "DHL"} onChange={handleSelectedShipping}/>

                  <div className={styles.radioInfo}>
                    <div>
                      <div className={styles.text}>DHL 貨運</div>
                      <div className={styles.price}></div>
                    </div>
                    <div className={styles.period}>48 小時內送達</div>
                  </div>
                  <div className={styles.radioBoxBorder}>
                  </div>
                </label>

              </section>
            </form>


  )
}


export default StepTwo;