import React from 'react';
import './About.scss';
import Socials from '../../Components/Socials/Socials'
/*
<div className="big">
   <img src="face2.png" />

</div>
*/
export default class About extends React.Component {

  componentDidMount() {
    document.title = 'About - Dylan Babbs';
  }

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
                        I'm a 23-year-old technologist in Seattle, Washington. I'm fascinated by the intersection of the physical and the digital world.
                        </div>
                        <div>
                           Shoot me an email if you think there is something we should be doing together. Always interested in meeting up with smart people to chat.
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
                           <div className="item">Mongo, Express, Node</div>
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
                           <div className="item">3D Vector Web Maps with harp.gl: JavaScript Conference Asia, Singapore, 2019</div>
                           <div className="item">Isoline Routing: SeattleJS Meetup, Seattle, 2019</div>
                           <div className="item">Web Mapping & Visualization: #Map_IT Hackathon, Warsaw, Poland, 2018</div>
                           <div className="item">Web Mapping & Visualization: HacknBreak, Izmir Turkey, 2018</div>
                           <div className="item">Tableau Visualization: UW Technical Foundations of Informatics, Seattle, WA, 2017</div>
                        </div>
                     </div>

                     <div className="about-col">
                        <div className="title">
                           Certifications
                        </div>
                        <div>
                           <div className="item">ISPMA Certified Software Product Manager, 2018</div>
                           <div className="item">AWS Certified Cloud Practitioner, 2019</div>
                        </div>
                     </div>

                     <div className="about-col">
                        <div className="title">
                           Hackathon Awards
                        </div>
                        <div>
                           <div className="item">Discover Hack Your Trip Hackathon, 2nd Place, 2018</div>
                           <div className="item">PwC Cybersecurity Contest, 1st Place, 2016</div>
                           <div className="item">HERE-Garmin Hackathon, Most Innovative, 2015</div>
                           <div className="item">HERE Company Hackathon, Best Cross Site Collaboration, 2015</div>
                        </div>
                     </div>

                  </div>

               </div>

            </div>

         </div>
      )
   }
}
