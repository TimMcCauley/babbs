import React from 'react';
import './LearnMore.scss'

const LearnMore = (props) => {
   return (
      <a className="learn" href={props.link}>
         Learn More &#8594;
      </a>
   )

}

export default LearnMore;
