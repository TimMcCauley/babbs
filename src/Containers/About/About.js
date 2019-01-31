import React from 'react';
import './About.scss';
import Socials from '../../Components/Socials/Socials'
/*
<div className="big">
   <img src="face2.png" />

</div>
*/
export default class About extends React.Component {

   render() {

      return (
         <div className="about">

            <div className="rest">
               <div className="grid-1-2">
                  <div>
                     <Socials margin={false}/>
                  </div>
                  <div>
                     <div className="lead">
                        Currently, I work at <span className="highlight">HERE Technologies</span> in Seattle.
                        <br/>Previously, I studied Informatics at the <span className="highlight">University of Washington.</span>
                     </div>

                     <div className="info">
                        <div>
                        Thanks for stopping by.
                        I'm a 23-year-old technologist in Seattle, Washington. The intersection of the physical world and the digital world fascinates me.
                        </div>
                        <div>
                           Shoot me an email if you think there is something we should be doing together. Always interested in meeting up with some smart people to chat over coffee or beer.
                        </div>
                     </div>



                     <div className="about-col">
                        <div className="title">
                           Interests
                        </div>
                        <div>

                           <div className="item">Maps & Location</div>
                           <div className="item">Human-Computer Interaction</div>
                           <div className="item">Data Visualization</div>
                           <div className="item">Growth</div>
                        </div>
                     </div>




                     <div className="about-col">
                        <div className="title">
                           Core Skills
                        </div>
                        <div>
                           <div className="item">Product Research</div>
                           <div className="item">Concept Prototyping</div>
                           <div className="item">UX Engineering</div>
                        </div>
                     </div>
                     <div className="about-col">
                        <div className="title">
                           Technologies
                        </div>
                        <div>
                           <div className="item">JavaScript, React, HTML, CSS</div>
                           <div className="item">MongoDB, Express</div>
                           <div className="item">Python, R, SQL</div>
                        </div>
                     </div>
                     <div className="about-col">
                        <div className="title">
                           Tools
                        </div>
                        <div>
                           <div className="item">Sketch, Framer, Tableau, JIRA, Jupyter</div>
                        </div>
                     </div>

                     <div className="about-col">
                        <div className="title">
                           Speaking
                        </div>
                        <div>
                           <div className="item">Web Mapping & Visualization: #Map_IT Hackathon, Warsaw, Poland, 2018</div>
                           <div className="item">Web Mapping & Visualization: HacknBreak, Izmir Turkey, 2018</div>
                           <div className="item">Tableau Visualization: UW Technical Foundations of Informatics, 2017</div>
                        </div>
                     </div>
                     <div className="about-col">
                        <div className="title">
                           Awards
                        </div>
                        <div>
                           <div className="item">Discover Hack Your Trip Hackathon, 2nd Place, 2018</div>
                           <div className="item">PwC Cybersecurity Contest, 1st Place, 2016</div>
                           <div className="item">HERE-Garmin Hackathon, Most Innovative, 2015</div>
                           <div className="item">HERE Company Hackathon, Best Cross Sight Collaboration, 2015</div>
                        </div>
                     </div>

                  </div>

               </div>

            </div>

         </div>
      )
   }
}
