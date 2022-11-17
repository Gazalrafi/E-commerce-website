import {useState}  from 'react';
import Header from './components/Header/Header.js';
import ProductView from './components/product/ProductView.js';
import Cart from './components/Cart/Cart.js';

function App() {
const [cartIsShown,setCartIsshown]=useState(false);

const cartAddHandler=()=>{
  setCartIsshown(true);
}

const HideCartHandler=()=>{
  setCartIsshown(false);
}

  return (
    <>
   {cartIsShown && <Cart onClose={HideCartHandler}/>}
    <Header onShowCart={cartAddHandler}/>
      <main>
    <ProductView/>
      </main>
    </>
  );
}

export default App;
