import { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './components/store/CartProvider';
import Items from './components/Items/Items';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler}/>
          <main>
            <Items />
          </main>
    </CartProvider>
  );
}

export default App;
