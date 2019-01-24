import React from 'react';
import './Button.scss';

export default class Button extends React.Component {



   render() {

      const classes = [];

      if (this.props.color === 'dark') {
         classes.push('dark')
      } else if (this.props.color ==='light') {
         classes.push('light')
      }

      return (
         <button
            className={classes.join(' ')}
            onClick={this.props.onClick}
         >
            {this.props.text}
         </button>
      )
   }
}
