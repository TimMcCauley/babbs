import React from 'react';
import './LearnMore.scss'

const LearnMore = (props) => {

   const text = {
      learn: <div className="learn">Learn More &#8594;</div>,
      github: <div className="learn">Visit Github &#8594;</div>,
   }
   return (
      <div className="learn">{text[props.text]}</div>
   )
}

export default LearnMore;
