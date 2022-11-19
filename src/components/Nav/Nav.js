import React from 'react';
import HeadeCartButton from '../Cart/HeaderCartButton.js';
import {Link} from "react-router-dom";
import classes from './NavBar.module.css';

const NavBar=(props)=>{

return(
   
    
        <nav>
        <div className={classes.navmenu}>
            <ul>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/'>STORE</Link>
                </li>
                <li>
                    <Link to='/about'>ABOUT</Link>
                </li>
                <HeadeCartButton onClick={props.onClick}/>
            </ul>
        </div>
    </nav>
    
    
);
}
export default NavBar;