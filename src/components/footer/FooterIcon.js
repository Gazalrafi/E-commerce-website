import React from 'react';
import classes from './FooterIcon.module.css';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
  } from "react-icons/fa";

const FooterIcon =()=>{
    return <>
    <div className={classes.socialmedia}>
    <ul >
      <li>
        <a
          href="https://www.facebook.com/"
          target="facebook">
          <FaFacebookSquare className={classes.facebook} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_thapa">
          <FaInstagramSquare className={classes.instagram}/>
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/"
          target="_thapa">
          <FaYoutubeSquare className={classes.youtube} />
        </a>
      </li>
    </ul>
    </div>
    </>
    
}
export default FooterIcon;
