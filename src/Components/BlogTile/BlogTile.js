import React from 'react';
import './BlogTile.scss'
import LearnMore from '../LearnMore/LearnMore';
import { monthNames } from '../../shared';

const BlogTile = (props) => {


   const date = `${monthNames[new Date(props.writing.date).getMonth()]} ${new Date(props.writing.date).getDate()}, ${new Date(props.writing.date).getFullYear()}`

   let desc = props.writing.description;
   if (props.blogPage) {
      desc = desc.split(' ').slice(0, 40).join(' ') + '...';
   }
   console.log(props.writing.img)
   return (
      <a href={props.writing.url} className="post">
         {
            props.image &&
            <div
               className="block2"
               style={{'backgroundImage': `url('img/${props.writing.img}')`}}
            >
            </div>
         }

         <div>
            <div className="date">{date}</div>
            <div className="post-title">{props.writing.title}</div>
            <div className="teaser">{desc}</div>
            <LearnMore text={props.writing.link_text} link="{props.writing.url || '/writings/' + props.writing.slug}"/>
         </div>
      </a>
   )
}

export default BlogTile;
