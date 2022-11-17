import classes from './HeaderCartButton.module.css';
import CartIcon from  './CartIcon.js';

const HeaderCartButton=(props)=>{
return <button className={classes.button} onClick={props.onClick}>
<span className={classes.icon}>
    <CartIcon/>
</span>
<span> your cart</span>
<span  className={classes.badge}>3</span>
</button>
}
export default HeaderCartButton;