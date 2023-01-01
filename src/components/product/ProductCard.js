
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
      key:props.id,
      img:props.img,
      price:props.price,
      album:props.album,
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
                
                <div  className={classes.image}>
                
                <img src={props.img} alt=''/>
                
                </div>
                <NavLink to='/imageA'>
                    <h4 style={{color:'maroon'}}>{props.view1}</h4>
                </NavLink>
                <NavLink to='/imageB'>
                    <h4 style={{color:'maroon'}}>{props.view2}</h4>
                </NavLink>
                <NavLink to='/imageC'>
                    <h4 style={{color:'maroon'}}>{props.view3}</h4>
                </NavLink>
                <NavLink to='/imageD'>
                    <h4 style={{color:'maroon'}}>{props.view4}</h4>
                </NavLink>
                
                <div className={classes.price}>{props.price}</div>
               
    </div>   
    <ProductFormButton onClick={addToCartHandler}/>
    
</li>


</>
)
}

export default ProductCard;