import {useReducer} from 'react';
import CartContext from './cart-context.js';


const defaultCartState={
    items:[],
    totalAmount:0,
}

const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
       
       const updatedTotalAmount=state.totalAmount + action.item.price;

       const existingCartItemIndex=state.items.findIndex(item=>item.id===action.item.id);//it will return the index of existing cart item

       const existingCartItem=state.items[existingCartItemIndex]

      
       let updatedItems;
       let updatedItem;
       
       if(existingCartItem){
         updatedItem={        //if item exist in cart already then we have to add existing cart item in updated item  
        ...existingCartItem, //and amount will be also updated
         amount:existingCartItem.amount + action.item.amount
        };
        updatedItems=[...state.items]; //old objects
        updatedItems[existingCartItemIndex]=updatedItem; //overwrite old objects in updated item
       }else{
        updatedItem={...state.item}; //if new item in cart
        updatedItems=state.items.concat(action.item);//.item of cartHandler
       }

       return {
        items:updatedItems,
        totalAmount:updatedTotalAmount
       };
    }
    return defaultCartState;
};

const CartProvider=(props)=>{

const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState);

const addItemToCartHandler=(item)=>{
  dispatchCartAction({
    type:'ADD',
    item:item
  });
};

const removeItemFromCartHandler=(id)=>{
    dispatchCartAction({
        type:'REMOVE',
        id:id
    });
};
const cartContext={
items:cartState.items,
totalAmount:cartState.totalAmount,
addItem:addItemToCartHandler,
removeItem:removeItemFromCartHandler
};

return <CartContext.Provider value={cartContext}>
    {props.children}
    
</CartContext.Provider>
}
export default CartProvider;