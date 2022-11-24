import React from 'react';
import {useState}  from 'react';
import Header from '../components/Header/Header.js';
import Product from '../components/product/Product.js';
import Cart from '../components/Cart/Cart.js';
import CartProvider from '../store/CartProvider.js';
import FooterIcon from '../components/footer/FooterIcon.js';







function HomePage() {
const [cartIsShown,setCartIsshown]=useState(false);

const cartAddHandler=()=>{
  setCartIsshown(true);
}

const HideCartHandler=()=>{
  setCartIsshown(false);
}

  return (
   <div>
     

  <CartProvider>
  
 
   {cartIsShown && <Cart onClose={HideCartHandler}/>}
  
    <Header onShowCart={cartAddHandler}/>
      <main>
    <Product/>
      </main>  
      <footer>
        <FooterIcon/>
      </footer>
      
      
  </CartProvider>
  </div> 
    

  );
}
export default HomePage;
