import NextBtn from "../../Main/Button/NextBtn/NextBtn.jsx"
import PrevBtn from "../../Main/Button/PrevBtn/PrevBtn.jsx"
import SubmitBtn from "../../Main/Button/SubmitBtn/SubmitBtn.jsx"
import styles from "./ProgressControl.module.css";

import React from "react";



export default function ProgressControl ({page, setPage}) {

const handleNextPage = () => setPage( prePage => prePage = prePage + 1)
const handlePrePage = () => setPage( prePage => prePage = prePage - 1)


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
        <SubmitBtn onClick={handleNextPage} />
        </div>
        }


    </section>
    


)

}


