import React, { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import { GiShoppingCart } from "react-icons/gi";


const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  
  return (
    <Fragment>
    <div className={classes.container}>
      <button className={classes.button} onClick={props.onClick}>
        <GiShoppingCart size="25" /> Cart{" "}
        <span className={classes.span}>{cartCtx.itemQuantity}</span>
      </button></div>
    
    </Fragment>
  );
};

export default HeaderCartButton;
