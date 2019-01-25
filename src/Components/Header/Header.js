import React from 'react';
import './Header.scss';

import { Link, NavLink } from 'react-router-dom';

export default class Header extends React.Component {
   render() {
      return (
         <header>
            <div className="inner">
               <Link className="left" to="/">Dylan Babbs</Link>
               <NavLink className="right" to="/writing" activeClassName="active">Writing</NavLink>
               <NavLink className="right" to="/projects" activeClassName="active">Projects</NavLink>
               <NavLink className="right" to="/about" activeClassName="active">About</NavLink>

            </div>
         </header>
      )
   }
}
