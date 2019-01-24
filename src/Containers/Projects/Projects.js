import React from 'react';
import './Projects.scss';

import LearnMore from '../../Components/LearnMore/LearnMore'
import ProjectTile from '../../Components/ProjectTile/ProjectTile';


export default class Projects extends React.Component {

   render() {
      return (
         <div className="projects-container">
            <div className="sidebar">
               <div className="title">Filter Projects:</div>
               <div className="item">&mdash; Design</div>
               <div className="item">&mdash; Code</div>
               <div className="item">&mdash; Research</div>
               <div className="item">&mdash; Coursework</div>
            </div>
            <div className="projects-grid">

               {
                  [0,1,2,3,4,5,7,8,].map((x, i) => <ProjectTile key={i} />)
               }
            </div>

         </div>
      )
   }
}
