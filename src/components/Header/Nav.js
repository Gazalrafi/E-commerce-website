
import HeadeCartButton from '../Cart/HeaderCartButton.js';
import classes from './NavBar.module.css';

const NavBar=(props)=>{

return(
    <header>
        <div className={classes.navmenu}>
            <ul>
                <li>
                    <a href='a'>HOME</a>
                </li>
                <li>
                    <a href='a'>STORE</a>
                </li>
                <li>
                    <a href='a'>ABOUT</a>
                </li>
                <HeadeCartButton onClick={props.onClick}/>
            </ul>
            
          
        
        </div>
    </header>
);
}
export default NavBar;