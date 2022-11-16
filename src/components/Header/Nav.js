import classes from './NavBar.module.css';
const NavBar=()=>{
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
            </ul>

        </div>
    </header>
);
}
export default NavBar;