import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import MainHeader from "./components/Layout/MainHeader";
import Meals from "./components/Meals/Meals";
import CartProvider from "./context/CartProvider";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const openCartHandler = () => {
    setCartVisible(true);
  };
  const closeCartHandler = () => {
    setCartVisible(false);
  };

  return (
    <CartProvider>
      {cartVisible && <Cart onClose={closeCartHandler} />}
      <MainHeader onCartOpen={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
