import React from 'react';
import './Footer.scss';

const Footer  = () => {
   return (
      <footer>
         <span>&copy; {new Date().getFullYear()} Dylan Babbs. </span>
         <a href="https://github.com/dbabbs/babbs">
            View source code.
         </a>
      </footer>
   )
}

export default Footer;
