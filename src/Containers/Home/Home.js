import React from 'react';
import './Home.scss';

export default class Home extends React.Component {

   render() {

      const lead = Math.random() >= 0.5 ? 'Maps + Code' : 'Design + Code + Grow';
      return (
         <>
            <div className="banner">
               <span className="bold">Hot off the press: </span>
               <a href="https://here.com" className="light-link">Fighting hunger with chatbots</a>
            </div>

            <div className="mainstage">
               <div className="lead">
                  {lead}
               </div>
               <div className="sublead">
                  Interdisciplinary Technologist based in Seattle, WA.
               </div>

            </div>

            <div className="carousel">
               <div className="project">
                  <div className="block"></div>
                  <div className="title">
                     FlightMapper
                  </div>
                  <div className="subtitle">
                     A full stack visualization application to display flight history.

                  </div>
                  <div class="learn">
                     Learn More &#8594;
                  </div>

               </div>

               <div className="project">
                  <div className="block"></div>
                     <div className="title">
                        Social Good Chatbot
                     </div>
                     <div className="subtitle">
                        HERE Technologies and Greater Chicago Food Depository team up to fight hunger.
                     </div>
                     <div class="learn">
                        Learn More &#8594;
                     </div>
               </div>
            </div>

            <div className="newsletter">

            </div>
         </>
      )
   }
}
