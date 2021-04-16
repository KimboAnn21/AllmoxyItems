import { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import ItemsAvailable from './components/Items/ItemsAvailable';
import ItemSummary from './components/Items/ItemSummary';
import Cart from './components/Cart/Cart';
import CartProvider from './components/store/CartProvider';

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
            <ItemSummary />
            <ItemsAvailable />
          </main>
    </CartProvider>
  );
}

export default App;
