import React from 'react';
import './ProjectTile.scss';
import LearnMore from '../LearnMore/LearnMore';

const ProjectTile = (props) => {
   const link = '';

   return (
      <a href={link} className="project">
         <div className="block"></div>
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

export default ProjectTile;
