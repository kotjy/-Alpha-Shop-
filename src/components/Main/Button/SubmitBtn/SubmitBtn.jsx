import styles from './SubmitBtn.module.css'

export default function SubmitBtn({onClick}){
    return(
        <button className={styles.submitBtn} onClick={onClick}>
            確認下單
        </button>
    )
}