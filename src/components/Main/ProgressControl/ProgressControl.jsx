import NextBtn from "../../Main/Button/NextBtn/NextBtn.jsx"
import PrevBtn from "../../Main/Button/PrevBtn/PrevBtn.jsx"
import SubmitBtn from "../../Main/Button/SubmitBtn/SubmitBtn.jsx"
import styles from "./ProgressControl.module.css";
import { useContext } from "react";
import {FormContext} from "../../../context/FormContext.js";
import {CartContext} from "../../../context/CartContext.js";




export default function ProgressControl ({page, setPage}) {

const handleNextPage = () => setPage( prePage =>  prePage + 1)
const handlePrePage = () => setPage( prePage =>  prePage - 1)

const {formInfo} = useContext(FormContext)
const {allPrice} = useContext(CartContext)

const handleSubmit = () =>{
  console.log(`
   總金額：$${allPrice}
   持卡人姓名：${formInfo.cardNumber}
   有效期限：${formInfo.cardValid}
   CVC/CCV:${formInfo.cardCcc}
  `)
}


return(
    <section className={styles.container}>
       {page === 1 && 
       <div className={styles.step1}>
        <NextBtn onClick={handleNextPage} />
        </div>
        }

       
       {page=== 2 && 
       <div className= {styles.other_steps}>
         <PrevBtn onClick={handlePrePage} />
        <NextBtn onClick={handleNextPage} />
        </div>
        }
      
      
      {page === 3 && 
       <div className= {styles.other_steps}>
         <PrevBtn onClick={handlePrePage} />
        <SubmitBtn onClick={handleSubmit} />
        </div>
        }


    </section>
    


)

}


