import React from 'react';
import './Banner.scss';


const Banner = (props) => {
   return (
      <div className="banner">
         <span className="bold">{props.title}</span>
         <a href={props.link} className="light-link">{props.text}</a>
      </div>
   )
}

export default Banner;
