import React from 'react';
import './BlogTile.scss'
import LearnMore from '../LearnMore/LearnMore';
import { monthNames } from '../../shared';
import { Link } from 'react-router-dom';

const BlogTile = (props) => {


   const date = `${monthNames[new Date(props.writing.date).getMonth()]} ${new Date(props.writing.date).getDate()}, ${new Date(props.writing.date).getFullYear()}`

   let desc = props.writing.description;
   if (props.blogPage) {
      desc = desc.split(' ').slice(0, 40).join(' ') + '...';
   }
   if (props.writing.external) {
      return (
         <a target="_blank" rel="noopener noreferrer" href={props.writing.url} className="post">
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
   } else {
      console.log(props.writing.slug);
      return (
         <Link to={`writing/${props.writing.slug}`} className="post">
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
         </Link>
      )

   }

}

export default BlogTile;
