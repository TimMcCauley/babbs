import React from 'react';
import './Writing.scss';
import ProjectTile from '../../Components/BlogTile/BlogTile';
import Button from '../../Components/Button/Button';


export default class Writing extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         writing: this.props.writing

      }
   }


   render() {
      return (
         <div className="writing-container">

         </div>
      )
   }
}
