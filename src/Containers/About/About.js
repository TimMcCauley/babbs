import React from 'react';
import './About.scss';
import Socials from '../../Components/Socials/Socials'

export default class About extends React.Component {

   render() {

      return (
         <div className="about">
            <div className="big">


            </div>
            <div className="rest">
               <div className="grid-1-2">
                  <div>
                     <Socials margin={false}/>
                  </div>
                  <div>
                     <div className="lead">
                        Currently, I work at <span className="highlight">HERE Technologies</span> in Seattle.
                        <br/>I studied Informatics at the <span className="highlight">University of Washington.</span>
                     </div>

                     <div className="info">
                        Figuring out what's next.
                        I enjoy map technologies and figuring out what's. I love trying out new technologies
                        and exploring how I can contribute. oompa loompa or just whatever,
                        I think i know what to do and why to do it. Feel free to reach out. Happy to grab coffee with anyone, anytime.
                     </div>



                     <div className="about-col">
                        <div className="title">
                           Interests
                        </div>
                        <div>

                           <div className="item">Maps & Location</div>
                           <div className="item">Data Visualization</div>
                           <div className="item">User Experience Design</div>
                           <div className="item">Growth</div>
                        </div>
                     </div>



                     <div className="about-col">
                        <div className="title">
                           Speaking
                        </div>
                        <div>
                           <div className="item">#Map_IT Hackathon, Warsaw Poland</div>
                           <div className="item">HacknBreak, Izmir Turkey</div>
                        </div>
                     </div>
                     <div className="about-col">
                        <div className="title">
                           Awards
                        </div>
                        <div>
                           <div className="item">Discover Hack Your Trip, 2nd Place</div>
                           <div className="item">PwC Cybersecurity Context, 1st Place</div>
                           <div className="item">HERE-Garmin Hackathon, 2nd Place (double check)</div>
                           <div className="item">HERE Company Hackathon, Most Innovative (double check)</div>
                        </div>
                     </div>
                     <div className="about-col">
                        <div className="title">
                           Technologies
                        </div>
                        <div>
                           <div className="item">React</div>
                           <div className="item">Concept Prototyping</div>
                           <div className="item">UX Engineering</div>
                        </div>
                     </div>
                     <div className="about-col">
                        <div className="title">
                           Technologies
                        </div>
                        <div>

                           <div className="item">Product Research</div>
                           <div className="item">Concept Prototyping</div>
                           <div className="item">UX Engineering</div>
                        </div>
                     </div>

                  </div>

               </div>

            </div>

         </div>
      )
   }
}
