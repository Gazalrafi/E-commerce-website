
import React from 'react';
import {useContext} from 'react';
import classes from './ProductCard.module.css';
import CartContext from '../../store/cart-context.js'
import ProductFormButton from './ProductFormButton';
import {NavLink} from "react-router-dom";





const ProductCard=(props)=>{
    const cartCtx=useContext(CartContext);
    
    const addToCartHandler=(amount)=>{
    cartCtx.addItem({
      id:props.id,
      price:props.price,
      album:props.album,
      image:props.image,
      amount:amount
    });
     
    };

return (
<>

<li className={classes.body}>
                <div>
                <div className={classes.music}>
                    <h2>MUSIC</h2>
                </div>
                <div className={classes.album}>
                    <h4>{props.album}</h4>
                </div>
                <NavLink to='/product'>
                <div  className={classes.image}>
                    <div id={props.id}/>
                <img src={props.image} alt='images'/> 
                </div>
                </NavLink>
                <div className={classes.price}>{props.price}</div>
               
    </div>   
    <ProductFormButton onClick={addToCartHandler}/>
    
</li>


</>
)
}

export default ProductCard;