import React from 'react';
import './HomeProjectRow.scss'

import LearnMore from '../LearnMore/LearnMore';
import Button from '../Button/Button';

const HomeProjectRow = (props) => {
   return (
      <div className="carousel">
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
         <div className="project">
            <div className="block"></div>
               <h3>
                  Social Good Chatbot
               </h3>
               <div className="subtitle">
                  HERE Technologies and Greater Chicago Food Depository team up to fight hunger.
               </div>

               <LearnMore link="google.com" />
         </div>
         <div>
            <Button color="light" text="View all projects" />
         </div>

      </div>
   )
}

export default HomeProjectRow;
