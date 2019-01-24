import React from 'react';
import './Home.scss';

import Socials from '../../Components/Socials/Socials';
import HomeProjectRow from '../../Components/HomeProjectRow/HomeProjectRow'
import HomeNewsLetterRow from '../../Components/HomeNewsLetterRow/HomeNewsLetterRow';
import BlogTile from '../../Components/BlogTile/BlogTile';

import Button from '../../Components/Button/Button';



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

            <HomeProjectRow projects={[this.props.projects[0], this.props.projects[1]]}/>


            <HomeNewsLetterRow />

            <div className="writings">
               <h1 style={{marginLeft: '20px'}}>Writings</h1>



               <BlogTile />
               <BlogTile />
               <Button color="light" text="View all writing" />
            </div>


         </>
      )
   }
}
