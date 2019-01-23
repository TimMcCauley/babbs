import React from 'react';
import './Home.scss';

import LearnMore from '../../Components/LearnMore/LearnMore';
import Socials from '../../Components/Socials/Socials';
import HomeProjectRow from '../../Components/HomeProjectRow/HomeProjectRow'
import HomeNewsLetterRow from '../../Components/HomeNewsLetterRow/HomeNewsLetterRow';


export default class Home extends React.Component {

   render() {

      const lead = Math.random() >= 0.5 ? 'Maps + Code' : 'Design + Code + Grow';
      return (
         <>
            <div className="mainstage">
               <div className="lead">
                  {lead}
               </div>
               <div className="sublead">
                  Technologist based in Seattle, WA.
               </div>
               <Socials />
            </div>

            <HomeProjectRow />


            <HomeNewsLetterRow />

            <div className="writings">
               <h1>Writings</h1>

               <div className="post">
                  <div className="date">January 8th, 2019</div>
                  <div className="post-title">Interactive HERE Isolines with React + Leaflet</div>
                  <div className="teaser">This is some teaser text that i am writing. The HERE isoline text is super important because it allows for</div>
                  <LearnMore link="google.com"/>
            </div>
               <div className="post">
                  <div className="date">January 8th, 2019</div>
                  <div className="post-title">Interactive HERE Isolines with React + Leaflet</div>
                  <div className="teaser">This is some teaser text that i am writing. The HERE isoline text is super important because it allows for</div>
                  <LearnMore link="google.com"/>
            </div>
            </div>


         </>
      )
   }
}
