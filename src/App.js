import { useState } from 'react';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './components/store/CartProvider';
import AllItems from './components/Items/AllItems/AllItems';

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
            <AllItems />
          </main>
    </CartProvider>
  );
}

export default App;
