import "./App.css";
import { CartContextProvider } from "./context/CartContext";
import Form from "./components/Main/Form";
import Cart from "./components/Main/Cart/Cart";




function App() {
  return (
    <div className="biggestContainer">
    <main className="mainContainer" >
      <CartContextProvider>
        <Form/>
        <div className="cartContainer">
          <Cart/>
        </div>
      </CartContextProvider>
    </main>
   </div>
    
  );
    
}

export default App;

