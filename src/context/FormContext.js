import { createContext, useState } from "react";

const cardInfo ={
  cardName:"",
  cardNumber:"",
  cardValid:"",
  cardCcc:"",
}


const FormContext = createContext()
function FormContextProvider ({children}) {
  const [formInfo, setFormInfo] = useState(cardInfo)

  function handleInputChange(e) {
    setFormInfo({...formInfo, [e.target.name] : e.target.value})
  }
  return(
    <FormContext.Provider value={{formInfo, setFormInfo, handleInputChange }}>
      {children}
    </FormContext.Provider>
  )
}

export {FormContext, FormContextProvider} 