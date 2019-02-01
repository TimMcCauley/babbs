import React from 'react';
import './Input.scss';

export default class Input extends React.Component {
   render() {
      const style = {};

      if (this.props.align === 'center') {
         style['textAlign'] = 'center';
      }
      return (
         <input
            style={style}
            type="text"
            value={this.props.value}
            onChange={this.props.onChange}
            onKeyPress={this.props.onKeyPress}
         />
      )

   }
}
