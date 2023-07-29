import { ReactComponent as RightArrow } from "../../../../icons/right-arrow.svg";
import styles from './NextBtn.module.css'


export default function NextBtn ({onClick}){
  return(
     <button className={styles.nextBtn} onClick={onClick}>
              下一步
              <RightArrow  />
            </button>
  )
}
