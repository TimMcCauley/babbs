import React from 'react';
import './ProjectTile.scss';
import LearnMore from '../LearnMore/LearnMore';
import { Link } from 'react-router-dom';

import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';

const ProjectTile = (props) => {
   // const link = '';
   // let jsx;
   // if (props.project.content) {
   //    jsx = (
   //       <Link to={`/projects/${props.project.slug}`} className="project">
   //          <div
   //             style={{'backgroundImage': `url('img/${props.project.img}')`}}
   //             className="block"
   //          >
   //          </div>
   //          <h3>
   //             {props.project.title}
   //          </h3>
   //          <div className="subtitle">
   //             {props.project.description}
   //          </div>
   //          <LearnMore text={props.project.link_text} link="google.com" />
   //       </Link>
   //    )
   // } else {
      let jsx = (
         <a target="_blank" rel="noopener noreferrer" href={props.project.external_slug} className="project">
            <div
               className="block"
               style={
                  {
                     'backgroundColor': props.project.background,
                     'backgroundImage': `url('img/${props.project.img}')`,
                  }
               }
            >
            </div>

            {/*
               <ProgressiveImage
                  className="block2"
                  preview={tiny}
                  image={normal}
               />*/
            }

            <h3>
               {props.project.title}
            </h3>
            <div className="subtitle">
               {props.project.description}

            </div>
            <LearnMore text={props.project.link_text} link="google.com" />
         </a>
      )
   // }
   return jsx;
}

export default ProjectTile;
