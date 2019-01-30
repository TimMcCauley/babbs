import React from 'react';
import { Link } from 'react-router-dom';
import './HomeProjectRow.scss'

import Button from '../Button/Button';
import ProjectTile from '../ProjectTile/ProjectTile';

const HomeProjectRow = (props) => {
   return (
      <div className="carousel">
         <ProjectTile project={props.projects[0]}/>
         <ProjectTile project={props.projects[1]}/>
         <div className="button-row">
            <Link to="/projects">
               <Button color="light" text="View all projects" />
            </Link>

         </div>
      </div>
   )
}

export default HomeProjectRow;
