import React from 'react';
import classes from './Home.module.css';
import FooterIcon from '../footer/FooterIcon.js';
import NavBar from './Nav.js';

const Home=()=>{
return (
    <section >
      <heade> <NavBar/></heade>
     
    <div className={classes.header}>
    <h1>The Generics</h1>
    </div>
    <div className={classes.subheading}>
        <h3>Get our Latest Album</h3>
        <img src="https://www.freepnglogos.com/uploads/play-button-png/play-button-watch-video-understand-the-power-clarip-less-than-minute-7.png" alt="play button" className={classes.buttonimage}></img>
    </div>

    <div className={classes.tours}>
    <h1>Tours</h1>
    </div>

  <main className={classes.main}>
   <div className={classes.one}>
 <p>JUL 16</p>
 <p>DETROIT, MI</p>
 <p>DTE ENERGY MUSIC THEATRE</p>
 <p className={classes.tickets}>BUY TICKETS</p>
   </div>
   <div className={classes.two}>
 <p>JUL 19</p>
 <p>TORONTO,</p>
 <p>ONBUDWEISER STAGE</p>
 <p className={classes.tickets}>BUY TICKETS</p>
   </div>
   <div className={classes.three}>
 <p>JUL 22</p>
 <p>BRISTOW, VA</p>
 <p>JIGGY LUBE LIVE</p>
 <p className={classes.tickets}>BUY TICKETS</p>
   </div>
   <div className={classes.four}>
 <p>JUL 29</p>
 <p>PHOENIX, AZ</p>
 <p>AK-CHIN PAVILION</p>
 <p className={classes.tickets}>BUY TICKETS</p>
   </div>
   <div className={classes.five}>
 <p>AUG 2</p>
 <p>LAS VEGAS, NV</p>
 <p>T-MOBILE ARENA</p>
 <p className={classes.tickets}>BUY TICKETS</p>
   </div>
   <div className={classes.six}>
 <p>AUG 7</p>
 <p>CONCORD, CA</p>
 <p>CONCORD PAVILION</p>
 <p className={classes.tickets}>BUY TICKETS</p>
   </div>
  </main>

  <footer className={classes.lowerheader}>
    <h1>The Generics</h1>
    <FooterIcon/>
  </footer>
    </section>
)
}
export default Home;