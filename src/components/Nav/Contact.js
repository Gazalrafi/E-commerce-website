import React,{useRef} from 'react';
import NavBar from './Nav.js';

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
   
<form onSubmit={submitHandler}>
<NavBar/>
    <div>
        <label>Name:</label>
        <input type='text' id="name" ref={nameRef}/>
    </div>
    <div>
        <label>Email:</label>
        <input type='email' id="email" ref={emailRef}/>
    </div>
    <div>
        <label>phone no.:</label>
        <input type='number'id="phone" ref={phoneRef}/>
    </div>
    <div>
        <button>Submit</button>
    </div>
</form>
);

}
export default Contact;