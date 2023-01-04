import CartContext from "../../store/cart-context";
import classes from "./CartItems.module.css";
import React, { useContext } from "react";

const CartItems = (props) => {
  const price = props.product.price === null ? 0 : `Rs.${props.product.price}`;
  const cartCtx = useContext(CartContext)
  const id = props.product.id
  const deletingItemHandler = () => 
  {
    cartCtx.removeItem(id)
  }
  return (
    <li>
      <div className={classes.container}>
        <div className={classes['cart-column']}>
          <img src={props.product.img} alt="Cart items"/>
          <span>{props.product.title}</span>
        </div>
        <span className={classes.price}>{price}</span>
        <div className={classes.quantity}>
          <span>{props.product.quantity}</span>
          <button onClick={deletingItemHandler}>REMOVE</button>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
