import React from 'react';
import './HomeProjectRow.scss'

import Button from '../Button/Button';
import ProjectTile from '../ProjectTile/ProjectTile';

const HomeProjectRow = (props) => {
   return (
      <div className="carousel">
         <ProjectTile />
         <ProjectTile />
         <div>
            <Button color="light" text="View all projects" />
         </div>
      </div>
   )
}

export default HomeProjectRow;
