import React from 'react';
import HeadeCartButton from '../Cart/HeaderCartButton.js';
import {NavLink} from "react-router-dom";
import classes from './NavBar.module.css';


const NavBar=(props)=>{

return(
   
    
        <nav>
        <div className={classes.navmenu}>
            <ul>
                <li>
                    <NavLink to='/home'>HOME</NavLink>
                </li>
                <li>
                    <NavLink to='/'>STORE</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>CONTACT US</NavLink>
                </li>
                <HeadeCartButton onClick={props.onClick}/>
               
            </ul>
        </div>
    </nav>
    
    
);
}
export default NavBar;