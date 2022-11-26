import React from 'react';
import { useState ,useRef, useContext} from 'react';
import AuthContext from '../../store/auth-context.js';
import classes from './AuthForm.module.css';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


const AuthForm = () => { 

const history=useHistory();
const emailInputRef=useRef();
const passwordInputRef=useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setIsLoading] =useState(false);

 const authCtx= useContext(AuthContext);
 

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler=(event)=>{
    event.preventDefault();

  const enteredEmail=emailInputRef.current.value;
  const enteredPassword=passwordInputRef.current.value;

  setIsLoading(true);
  let url;
  if(isLogin){ //
    url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDIQyfIj4bledD-TXFeR3TetJ2cjNet0uM';

  }else{
    url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDIQyfIj4bledD-TXFeR3TetJ2cjNet0uM';
  }
  fetch(
    url,
    {
  method:'POST',
  body:JSON.stringify({
    email:enteredEmail,
    password:enteredPassword,
    returnSecureToken:true
  }),
  headers:{
    'content-type':'application/json'
  }
  }).then((res)=>{
    setIsLoading(false);
    if(res.ok){
   return res.json();

    }else{
      return res.json().then((data)=>{
      let errorMessage='Authentication failed!';
      // if(data && data.error && data.error.message){
      //   errorMessage=data.error.message;
      // }
      throw new Error(errorMessage);
        
      });
    }
  }).then((data)=>{
    authCtx.login(data.idToken);
    history.replace('/');
  })
    .catch((err)=>{
      alert(err.message)
    })


    
    axios({
      method:'POST',
      url:'https://crudcrud.com/api/89b6efdacabb4a4e8f7247d73a1db3da/cartData',
      data:{
          login:isLogin,
          email:enteredEmail,
      }
   })
   .then((response)=>{
     console.log(response)
   }).catch((err)=>{
      console.log(err)
   })
      }
     
  
  
  
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          {! isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
