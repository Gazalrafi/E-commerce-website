import React, { useEffect } from 'react';
import {useReducer} from 'react';
import CartContext from './cart-context.js';


const defaultCartState={
    items:[],
    totalAmount:0,
};

const cartReducer=(state,action)=>{
    if(action.type==='FETCH'){
       return{
        items:state.items+action.payload,
        totalAmount:state.totalAmount+action.payload
       }
    }
    if(action.type==='ADD'){
       
       const updatedTotalAmount=state.totalAmount + action.item.price*action.item.amount;

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
    if(action.type==='REMOVE'){
        
     const existingCartItemIndex = state.items.findIndex((item)=>item.id===action.id);

     const existingItem=state.items[existingCartItemIndex];
        
    const updatedTotalAmount=state.totalAmount-existingItem.price;

    let updatedItems;
    if(existingItem.amount===1){
     updatedItems=state.items.filter(item=>item.id !== action.id);

    }else{//if item>1
    const updatedItem={...existingItem,amount:existingItem.amount-1};
    updatedItems=[...state.items];
    updatedItems[existingCartItemIndex]=updatedItem;
    }
    return{
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
// useEffect(()=>{
// const fetchData=async()=>{
//     const response=await fetch ('https://new-project-10d5a-default-rtdb.firebaseio.com/newCart.json');
    
//     if(!response.ok){
//        throw new Error('could not fetch cart data') ;
//     }
//     const data=await response.json();
//     return data;
// }
// try{
//    const cartData=  fetchData();
//    dispatchCartAction({
//      type:'FETCH',
//      items:cartData.items || [],
//      totalAmount:cartData.totalAmount,
//    })
   
// }
// catch(error){
//    console.log(error)
// }

// },[]);

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