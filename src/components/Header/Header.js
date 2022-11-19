import React from 'react';
import classes from './Header.module.css';
import NavBar from '../Nav/Nav.js';


const Header=(props)=>{
    return <>
    <header> 
    <NavBar onClick={props.onShowCart}/>
        <div className={classes.header}>
            <h1>The Generics</h1>
        </div>
    </header>
    </>
   
}
export default Header;