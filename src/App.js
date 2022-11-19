import React from 'react';
import {useState}  from 'react';
import {Route,Switch} from "react-router-dom";
import Header from './components/Header/Header.js';
import Product from './components/product/Product.js';
import Cart from './components/Cart/Cart.js';
import CartProvider from './store/CartProvider.js';
import FooterIcon from './components/footer/FooterIcon.js';
import About from './components/Nav/About.js';
import Home from './components/Nav/Home.js';


function App() {
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
  <Switch>
      <Route path='/about'><About/></Route>
      <Route path='/home'><Home/></Route>
    </Switch>
  </div> 
    

  );
}

export default App;
