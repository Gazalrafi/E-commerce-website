
import React from 'react';
import {useContext} from 'react';
import classes from './ProductCard.module.css';
import CartContext from '../../store/cart-context.js'
import ProductFormButton from './ProductFormButton';

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
                <div key={props.id}>
                <div className={classes.music}>
                    <h2>MUSIC</h2>
                </div>
                <div className={classes.album}>
                    <h4>{props.album}</h4>
                </div>
                <div className={classes.image}>
                <img src={props.image} alt='images'/>
                </div>
                <span className={classes.price}>{props.price}</span>
                
    </div>   
    <ProductFormButton onClick={addToCartHandler}/>  
</li>

</>
)
}

export default ProductCard;