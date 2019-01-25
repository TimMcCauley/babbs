import React from 'react';
import './ProjectTile.scss';
import LearnMore from '../LearnMore/LearnMore';
import { Link } from 'react-router-dom';

const ProjectTile = (props) => {
   // const link = '';
   let jsx;
   if (props.project.content) {
      jsx = (
         <Link to={`/projects/${props.project.slug}`} className="project">
            <div
               style={{'backgroundImage': `url('img/${props.project.img}')`}}
               className="block"
            >
            </div>
            <h3>
               {props.project.title}
            </h3>
            <div className="subtitle">
               {props.project.description}
            </div>
            <LearnMore text={props.project.link_text} link="google.com" />
         </Link>
      )
   } else {
      jsx = (
         <a href={props.project.external_slug} className="project">
            <div
               className="block"
               style={{'backgroundImage': `url('img/${props.project.img}')`}}
            >
            </div>
            <h3>
               {props.project.title}
            </h3>
            <div className="subtitle">
               {props.project.description}

            </div>
            <LearnMore text={props.project.link_text} link="google.com" />
         </a>
      )
   }
   return jsx;
}

export default ProjectTile;
