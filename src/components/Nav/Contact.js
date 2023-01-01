import React,{useRef} from 'react';
import NavBar from './Nav.js';
import classes from './Contact.module.css';

const Contact=()=>{
    const nameRef=useRef('');
    const emailRef=useRef('');
    const phoneRef=useRef('');

    const submitHandler=(event)=>{
        event.preventDefault(); 

        const userDetails={
            name:nameRef.current.value,
            email:emailRef.current.value,
            phone:phoneRef.current.value,
        };
        addHandler(userDetails);
        console.log(userDetails)
        async function addHandler(...userDetails) {
            const response = await fetch('https://react-http-4a933-default-rtdb.firebaseio.com/contact.json', {
              method: 'POST',
              body: JSON.stringify(userDetails),
              headers: {
                'Content-Type': 'application/json'
              }
            });
            const data = await response.json();
            console.log(data);
          } 
        }
    
return (
    <div>
    <NavBar/>
<form onSubmit={submitHandler} className={classes.form}>

    <div>
        <label>Name:</label><br/>
        <input type='text' id="name" ref={nameRef}/>
    </div>
    <div>
        <label>Email:</label><br/>
        <input type='email' id="email" ref={emailRef}/>
    </div>
    <div>
        <label>contact no.</label><br/>
        <input type='number'id="phone" ref={phoneRef}/>
    </div>
    <div>
        <button>Submit</button>
    </div>
</form>
</div>
);

}
export default Contact;