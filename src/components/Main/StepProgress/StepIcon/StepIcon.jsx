import { ReactComponent as Complete } from "../../../../icons/complete.svg"; 
import styles from "./StepIcon.module.css"

export default function StepIcon ({display, page}) {
  return (
    <>

     {page === display && (
                <span className={`${styles.icon} ${styles.now}`}>
                    <span className={styles.text}>{display}</span>
                </span>
            )}

            {page > display && <Complete/>}

            {page < display && (
                <span className={`${styles.icon} ${styles.future}`}>
                    <span className={styles.future_text}>{display}</span>
                </span>
            )}
    </>
  )
}