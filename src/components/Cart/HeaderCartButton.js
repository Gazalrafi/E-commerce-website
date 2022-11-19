import {useContext} from 'react';
import React from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from  './CartIcon.js';
import CartContext from '../../store/cart-context.js'

const HeaderCartButton=(props)=>{
    
const cartCtx=useContext(CartContext);

const cartItemNumbers=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber + item.price;
},0);

return <button className={classes.button} onClick={props.onClick}>
<span className={classes.icon}>
    <CartIcon/>
</span>
<span> your cart</span>
<span  className={classes.badge}>{cartItemNumbers}</span>
</button>
}
export default HeaderCartButton;