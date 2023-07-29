import { ReactComponent as LeftArrow } from "../../../../icons/left-arrow.svg";
import styles from "./PrevBtn.module.css"

export default function PrevBtn({onClick}) {
  return(

     <button className={styles.prevBtn} onClick={onClick}>
             <LeftArrow className={styles.arrowLeft} /> 
              上一步 
            </button>
  )
}