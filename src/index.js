import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router, withRouter} from "react-router-dom";
import { ga as GoogleAnalytics } from './shared';

class ScrollToTop extends React.Component {
   componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
         window.scrollTo(0, 0);
      }
   }

   render() {
      return this.props.children;
   }
}

const ScrollCorrection = withRouter(ScrollToTop);

ReactDOM.render(
   <Router>
      <ScrollCorrection>
         <App/>
      </ScrollCorrection>
   </Router>,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
