
import classes from './Header.module.css';
import NavBar from './Nav';

const Header=()=>{
    return <>
    <header>
    <NavBar/>
        <div className={classes.header}>
            <h1>The Generics</h1>
        </div>
    </header>
    </>
   
}
export default Header;