import React from 'react';
import './BlogTile.scss'
import LearnMore from '../LearnMore/LearnMore';

const BlogTile = (props) => {

   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   const date = `${monthNames[new Date(props.writing.date).getMonth()]} ${new Date(props.writing.date).getDate()}, ${new Date(props.writing.date).getFullYear()}`
   return (
      <div className="post">
         <div className="block2"></div>
         <div>
            <div className="date">{date}</div>
            <div className="post-title">{props.writing.title}</div>
            <div className="teaser">{props.writing.description}</div>
            <LearnMore text="learn" link="{props.writing.url || '/writings/' + props.writing.slug}"/>
         </div>
      </div>
   )
}

export default BlogTile;
