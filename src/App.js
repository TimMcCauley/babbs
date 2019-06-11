import React, {Component} from 'react';
import './App.scss';
import { Route, withRouter, Switch } from "react-router-dom";

//Components
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer'

//Containers
import Home from './Containers/Home/Home';
import About from './Containers/About/About';
import Projects from './Containers/Projects/Projects';
import Writing from './Containers/Writing/Writing';
import Post from './Containers/Post/Post';
import FourOhFour from './Containers/FourOhFour/FourOhFour';

//Data
import projects from './data/projects.json'
import writing from './data/writing.json'
import { capitalize } from './shared';
import { postLookup } from './Containers/Post/Post';

//Image
import face from './face.png'

class App extends Component {

   constructor(props) {
      super(props);
      this.state = {
         projects: projects,
         writing: writing
      }
   }

   render() {
      console.log(this.props);
      const urlSplits = this.props.location.pathname.split('/')
      const urlEnd = urlSplits[urlSplits.length - 1];
      return (
         <div className="app">
            <Header />
            {
               this.props.location.pathname === '/' &&
               <Banner
                  title=""
                  text="Watch my recent talk at Seattle JS about isoline routing"
                  link="/writing/seattle-js-isoline-routing"
               />

            }
            {
               this.props.location.pathname.includes('/writing') &&
               postLookup[urlEnd] &&
               <div className="big">
                  {postLookup[urlEnd].title}
               </div>
            }
            {
               (
                  (
                     this.props.location.pathname.includes('/writing') ||
                     this.props.location.pathname === '/projects'
                  ) &&
                  !postLookup[urlEnd]
               ) &&
               <div className="big">
                  {capitalize(this.props.location.pathname.substr(1))}
               </div>
            }
            {
               this.props.location.pathname === '/about' &&
               <div className="about-big">
                  <img src={face} alt="my face [very large]" />
               </div>
            }
            <div className="max">
               <Switch>
                  <Route exact path="/" component={() => <Home projects={this.state.projects} writing={this.state.writing}/>}/>
                  <Route exact path="/about" component={() => <About/>}/>
                  <Route exact path="/projects" component={() => <Projects projects={this.state.projects}/>}/>
                  <Route exact path="/writing/" component={() => <Writing writing={this.state.writing}/>}/>
                  <Route exact path="/writing/:id/" component={Post}/>
                  <Route component={FourOhFour} />
               </Switch>
            </div>
            <Footer/>
         </div>
      );
   }
}

export default withRouter(App);
