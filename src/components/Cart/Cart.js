import classes from './Cart.module.css';
import Modal from '../UI/Modal.js';

const Cart=(props)=>{
    const cartctx=<ul className={classes['cart-items']}>{[{
        category:'Music',
        type:"Album 2",
        price:'Rs.50',
        quantity:'3',
    }].map((item)=><li>{item.type}{` quantity:${item.quantity}`}</li>)}</ul>

return (
   <Modal>
        {cartctx}
    <div className={classes.total}>
    <span>Total amount</span>
    <span>Rs.50</span>
    </div>
    <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
    <button>Order</button>
    </div>
    </Modal>
)
}
export default Cart;