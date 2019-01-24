import React from 'react';
import './ProjectTile.scss';
import LearnMore from '../LearnMore/LearnMore';

const ProjectTile = (props) => {

   return (
      <div className="project">
         <div className="block"></div>
         <h3>
            FlightMapper.io
         </h3>
         <div className="subtitle">
            A full stack visualization application to display flight history.

         </div>
         <LearnMore link="google.com" />
      </div>
   )
}

export default ProjectTile;
