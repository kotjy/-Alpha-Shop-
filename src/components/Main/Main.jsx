import styles from './Main.module.css'
import StepProgress from "./StepProgress/StepProgress";
import StepOne from "../Main/Steps/StepOne/StepOne"
import StepTwo from "../Main/Steps/StepTwo/StepTwo"
import StepThree from "../Main/Steps/StepThree/StepThree"
import ProgressControl from './ProgressControl/ProgressControl';
import Cart from './Cart/Cart';
import { useState } from 'react';

export default function Step(){
    const [page, setPage] = useState(1)

    return(
        <section className={styles.container}>
            <div className={styles.leftScreen}>
            <h2 className={styles.title}>結帳</h2>
            <div className={styles.progress}><StepProgress page={page}/></div>
            <div className={styles.step}>
                {page === 1 && <StepOne />}
                {page === 2 && <StepTwo />}
                {page === 3 && <StepThree />}
            </div>
            <div className={styles.progress_control}><ProgressControl page={page} setPage={setPage}/></div>
            </div>
            <div className={styles.rightScreen}>
             <Cart />
            </div>
        </section>
    )
}