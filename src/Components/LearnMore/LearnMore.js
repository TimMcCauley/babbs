import React from 'react';
import './LearnMore.scss'

const LearnMore = (props) => {

   const text = {
      learn: <div className="learn">Learn more &#8594;</div>,
      github: <div className="learn">Visit Github &#8594;</div>,
      'live-project': <div className="learn">Visit live project &#8594;</div>,
      appstore: <div className="learn">View on the App Store &#8594;</div>,
      website: <div className="learn">Visit the website &#8594;</div>,
      presentation: <div className="learn">View the presentation &#8594;</div>,
      continue: <div className="learn">Continue Reading &#8594;</div>,
      heredev: <div className="learn">Read full post on HERE Dev blog &#8594;</div>,
   }
   return (
      <div className="learn">{text[props.text]}</div>
   )
}

export default LearnMore;
