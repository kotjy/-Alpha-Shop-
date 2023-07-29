import styles from "./StepProgress.module.css";
import StepIcon from "./StepIcon/StepIcon.jsx"



export default function StepProgress ({ page}) {
  return(
    <div className={styles.stepProgress}>
  <section className={styles.container}>
                <span className={styles.group}>
                    <StepIcon display={1} page={page}/>
                    <span className={`${styles.label} ${page >= 1 && styles.label_done}`}>寄送地址</span>
                </span>

                <span className={`${styles.bar} ${page >= 1 && styles.bar_done}`}></span>

                <span className={styles.group}>
                    <StepIcon display={2} page={page}/>
                    <span className={`${styles.label} ${page >= 2 && styles.label_done}`}>運送方式</span>
                </span>

                <span className={`${styles.bar} ${page >= 2 && styles.bar_done}`}></span>

                <span className={styles.group}>
                    <StepIcon display={3} page={page}/>
                    <span className={styles.label}>付款資訊</span>
                </span>
          </section>
          </div>
  )
}





    
