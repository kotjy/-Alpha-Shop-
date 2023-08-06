import styles from './Form.module.css'
import StepProgress from "./StepProgress/StepProgress";
import StepOne from "./Steps/StepOne/StepOne"
import StepTwo from "./Steps/StepTwo/StepTwo"
import StepThree from "./Steps/StepThree/StepThree"
import ProgressControl from './ProgressControl/ProgressControl';

import { useState } from 'react';
import { FormContextProvider } from '../../context/FormContext';





export default function Form(){
    const [page, setPage] = useState(1)

    return(
        <section className={styles.container}>
            <div className={styles.leftScreen}>
            <h2 className={styles.title}>結帳</h2>
            <div className={styles.progress}>
                <StepProgress page={page}/>
                </div>
                <FormContextProvider>
            <div className={styles.step}>
                {page === 1 && <StepOne />}
                {page === 2 && <StepTwo />}
                {page === 3 && <StepThree />}
            </div>
            
            <div className={styles.progress_control}>
                <ProgressControl page={page} setPage={setPage}/>
            </div>
            </FormContextProvider>
            </div>
        </section>
    )
}
