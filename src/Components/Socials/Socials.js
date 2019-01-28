import React from 'react';
import './Socials.scss';

const Socials = ({margin}) => {
   const style = {};
   if (margin) {
      style['margin'] = '20px'
      style['animationName'] = 'socials';
   } else {
      style['opacity'] = 1
   }
   return (
      <div className="socials" style={style}>
         <a href="https://twitter.com/dbabbs" className="icon"><i className="fa fa-twitter" aria-hidden="true"></i></a>
         <a href="mailto:dylan.babbs@gmail.com" className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></a>
         <a href="https://linkedin.com/in/babbsdj" className="icon"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
         <a href="https://github.com/dbabbs" className="icon"><i className="fa fa-github" aria-hidden="true"></i></a>
         <a href="https://dribbble.com/babbs" className="icon"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
      </div>
   )
}

export default Socials;
