import React, { useEffect } from 'react';
import {useContext} from 'react';
import axios from 'axios';
import classes from './Cart.module.css';
import Modal from '../UI/Modal.js';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem.js';

const Cart=(props)=>{

const cartCtx=useContext(CartContext);

const totalAmount=`Rs.${cartCtx.totalAmount}`;

const hasItems=cartCtx.items.length>0;

const items=cartCtx.items;
addDataHandler(items)



const cartItemRemoveHandler=(id)=>{
    cartCtx.removeItem(id);
};

const cartItemAddHandler=item=>{
    cartCtx.addItem(item);
};

const cartItems=(<ul className={classes['cart-items']}>{ Array.from(cartCtx.items).map((item,index)=>
 
 <CartItem
id={item.id}
key={index}
price={item.price}
image={item.img}
album={item.album}
amount={item.amount}
onRemove={cartItemRemoveHandler.bind(null,item.id)}
onAdd={cartItemAddHandler.bind(null,item)}/>

)}   
</ul>)


  
 async function addDataHandler(){
  const response=await fetch('https://new-project-10d5a-default-rtdb.firebaseio.com/newCart.json',
  {
  method:'PUT',
   body:JSON.stringify({
      items:items,
      totalAmount:totalAmount,
   }),
  }
 
  );
  if(!response.ok){
   throw new Error('sending cart data is failed');
  }
  else{
    const data=await response.json();
    console.log(data)
  }
  try{
    // await addDataHandler();
     console.log(response)
    }
    catch(error){
      console.log(error)
    
    }
};
useEffect(()=>{

addDataHandler();

},[])



return (
   <Modal>
    
        {cartItems}
    <div className={classes.total}>
    <span>Total amount</span>
    <span>{totalAmount}</span>
    </div>
    <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>X</button>
   {hasItems && <button onClick={addDataHandler}>Order</button>}
    </div>
   

    </Modal>
    
)
}
export default Cart;