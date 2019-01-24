import React from 'react';
import './BlogTile.scss'
import LearnMore from '../LearnMore/LearnMore';

const BlogTile = () => {
   return (
      <div className="post">
         <div className="date">January 8th, 2019</div>
         <div className="post-title">Interactive HERE Isolines with React + Leaflet</div>
         <div className="teaser">This is some teaser text that i am writing. The HERE isoline text is super important because it allows for</div>
         <LearnMore text="learn"link="google.com"/>
      </div>
   )
}

export default BlogTile;
