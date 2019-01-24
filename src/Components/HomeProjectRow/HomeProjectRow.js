import React from 'react';
import './HomeProjectRow.scss'

import Button from '../Button/Button';
import ProjectTile from '../ProjectTile/ProjectTile';

const HomeProjectRow = (props) => {
   return (
      <div className="carousel">
         <ProjectTile project={props.projects[0]}/>
         <ProjectTile project={props.projects[1]}/>
         <div>
            <Button color="light" text="View all projects" />
         </div>
      </div>
   )
}

export default HomeProjectRow;
