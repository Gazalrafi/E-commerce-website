import {useRef,useState} from 'react';
import classes from './ProductFormButton.module.css';
import Input from '../UI/Input.js';

const ProductFormButton=(props)=>{
    const [amountIsValid,setAmountIsValid]=useState(true);

    const amountInputRef=useRef();
    
    const submitHandler=(event)=>{
     event.preventDefault();
    
    const enteredAmount=amountInputRef.current.value;
    const enteredAmountNumber=+enteredAmount;
    
    if(
      enteredAmount.trim().length===0 || enteredAmountNumber < 1 || 
      enteredAmountNumber>5
      ){
        setAmountIsValid(false);
        return ;
}

props.onClick(enteredAmountNumber);
};

return <>
<form className={classes.form} onSubmit={submitHandler}>
<Input 
    ref={amountInputRef}
    label="Amount" 
    input={{
      id:'amount',
      type:'number',
      min:'1',
      max:'20',
      step:'1',
      defaultValue:'1',
    }}/>

<button>Add To Cart</button>
{!amountIsValid && <p>please enter a valid amount (1-20).</p>}
</form>
</>
}
export default ProductFormButton;