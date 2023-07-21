
import StepProgress from "./StepProgress/StepProgress.jsx";
import StepOne from "./Steps/StepOne/StepOne";
import ProgressControl from "./ProgressControl/ProgressControl.jsx";
//import StepTwo from "./components/Main/Steps/StepTwo/StepTwo.jsx";
//import StepThree from "./components/Main/Steps/StepThree/StepThree.jsx";
import Cart from "./Cart/Cart.jsx"
import styles from './Main.module.css';

export default function App() {
  return (

   <main className ={styles.mainContainer}>

    <div className ={styles.registerContainer}>
       <StepProgress />
    <div className={styles.formContainer}>
      <StepOne />
      { /*<StepTwo />
      <StepThree /> */}
    </div>
    <div className={styles.cartContainer}>
      < Cart />
    </div>
   
   <div className={styles.controlContainer}>
    <ProgressControl />
   </div>
    </div>
   </main>    
  );
    
}

