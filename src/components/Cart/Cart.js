import React from 'react';
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

const cartItems=(<ul className={classes['cart-items']}>{ cartCtx.items.map((item)=>
 
 <CartItem
id={item.id}
key={item.id}
price={item.price}
image={item.image}
album={item.album}
amount={item.amount}
onRemove={cartItemRemoveHandler.bind(null,item.id)}
onAdd={cartItemAddHandler.bind(null,item)}/>

)}   
</ul>)
 function addDataHandler(){

 axios({
    method:'POST',
    url:'https://crudcrud.com/api/89b6efdacabb4a4e8f7247d73a1db3da/cartData',
    data:{
        items:items,
    }
 })
 .then((response)=>{
   console.log(response)
 }).catch((err)=>{
    console.log(err)
 })

 axios.get("https://crudcrud.com/api/89b6efdacabb4a4e8f7247d73a1db3da/cartData")
 .then((response)=>{
   response(response);
  }).catch((err)=>{
     console.log(err)
  })
 
}
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