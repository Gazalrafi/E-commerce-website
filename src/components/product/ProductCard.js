
import React from 'react';
import {useContext} from 'react';
import classes from './ProductCard.module.css';
import CartContext from '../../store/cart-context.js'
import {NavLink} from "react-router-dom";
import Button from '../UI/Button';




const ProductCard=(props)=>{
    const cartCtx=useContext(CartContext);
    const price=`Rs.${props.price}`
    const addToCartHandler=()=>{

    cartCtx.addItem({
      id:props.id,
      key:props.id,
      img:props.img,
      price:props.price,
      album:props.album,
      quantity:1
    });
     
    };

return (
<>

<li className={classes.body} key={props.id} id={props.id}>
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
                
                <div className={classes.price} style={{fontWeight:'bold'}}>{price}</div>
               
    </div>   
    <Button onClick={addToCartHandler}>Add to Cart</Button>
    
</li>


</>
)
}

export default ProductCard;