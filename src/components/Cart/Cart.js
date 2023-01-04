import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartCloseButton from "./CartCloseButton";
import CartItems from "./CartItems";
// import Spinner from "react-bootstrap/Spinner";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);    
    
  
  console.log(cartCtx.totalAmount)
 
  const cartItemsList = cartCtx.items.map((item) => (
    <ul key={item.id} className={classes.ul}>
     {item && <CartItems  product={item} />}
    </ul>
  ));

  return (
    <Modal onClose={props.onClose}>
      <CartCloseButton className={classes.close} onClose={props.onClose} />
      <div className={classes.total}>
        <h2>Cart</h2>
        <div className={classes.wrapper}>
          <span className={classes.item}>ITEM</span>
          <span className={classes.price}>PRICE</span>
          <span className={classes.quantity}>QUANTITY</span>
        </div>
        {/* {!cartCtx.loader && <Spinner
              style={{
                 height: '2rem',
                 width: '2rem',
                 margin: '1rem auto',
                justifyContent: "center",
                alignItems: "center",
              }}
              animation="border"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>} */}
       <div>
          {cartItemsList}
          <span className={classes["cart-total"]}>
          <span>Rs.{cartCtx.totalAmount}</span>
            <strong>Total</strong>
          </span>
        </div>
        <Button>Purchase</Button>
      </div>
    </Modal>
  );
};

export default Cart;