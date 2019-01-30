import React, {Component} from 'react';
import './App.scss';
import { Route, withRouter } from "react-router-dom";

//Components
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer'

//Containers
import Home from './Containers/Home/Home';
import About from './Containers/About/About';
import Projects from './Containers/Projects/Projects';
import Writing from './Containers/Writing/Writing';

//Data
import projects from './data/projects.json'
import writing from './data/writing.json'


const capitalize = (e) => e.charAt(0).toUpperCase() + e.slice(1);


class App extends Component {

   constructor(props) {
      super(props);
      this.state = {
         projects: projects,
         writing: writing
      }
   }

   render() {
      console.log(this.props.location.pathname)
      return (
         <div className="app">
            <Header />
            {
               this.props.location.pathname === '/' &&
               <Banner
                  title="New Tutorial:  "
                  text="Interactive Isolines with HERE + React + Leaflet"
                  link="https://here.com"
               />

            }
            {
               (this.props.location.pathname === '/writing' ||
               this.props.location.pathname === '/projects') &&
               <div className="gig">
                  {capitalize(this.props.location.pathname.substr(1))}
               </div>
            }
            <div className="max">
               <Route exact path="/" component={() => <Home projects={this.state.projects} writing={this.state.writing}/>}/>
               <Route exact path="/about" component={() => <About/>}/>
               <Route exact path="/projects" component={() => <Projects projects={this.state.projects}/>}/>
               <Route exact path="/writing" component={() => <Writing writing={this.state.writing}/>}/>
            </div>
            <Footer/>
         </div>
      );
   }
}

export default withRouter(App);
