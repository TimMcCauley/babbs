import React from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';

export default class Header extends React.Component {
   render() {
      return (
         <header>
            <div className="inner">
               <Link className="left" to="/">Dylan Babbs</Link>
               <Link className="right" to="/">Projects</Link>
               <Link className="right" to="/">Writing</Link>
            </div>
         </header>
      )
   }
}
