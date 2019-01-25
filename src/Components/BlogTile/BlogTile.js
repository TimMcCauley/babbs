import React from 'react';
import './BlogTile.scss'
import LearnMore from '../LearnMore/LearnMore';

const BlogTile = (props) => {
   return (
      <div className="post">
         <div className="date">{new Date(props.writing.date).toLocaleDateString()}</div>
         <div className="post-title">{props.writing.title}</div>
         <div className="teaser">{props.writing.description}</div>
         <LearnMore text="learn" link="{props.writing.url || '/writings/' + props.writing.slug}"/>
      </div>
   )
}

export default BlogTile;
