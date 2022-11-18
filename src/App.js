import {useState}  from 'react';
import Header from './components/Header/Header.js';
import Product from './components/product/Product.js';
import Cart from './components/Cart/Cart.js';
import CartProvider from './store/CartProvider.js';


function App() {
const [cartIsShown,setCartIsshown]=useState(false);

const cartAddHandler=()=>{
  setCartIsshown(true);
}

const HideCartHandler=()=>{
  setCartIsshown(false);
}

  return (
  <CartProvider>

   {cartIsShown && <Cart onClose={HideCartHandler}/>}
    <Header onShowCart={cartAddHandler}/>
      <main>
    <Product/>
      </main>
      
  </CartProvider>
  );
}

export default App;
