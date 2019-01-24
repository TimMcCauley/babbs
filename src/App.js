import React, {Component} from 'react';
import './App.css';
import {Route} from "react-router-dom";

//Components
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer'

//Containers
import Home from './Containers/Home/Home';
import Projects from './Containers/Projects/Projects';

class App extends Component {

   constructor(props) {
      super(props);
      this.state = {
         activeTab: 'home'
      }
   }

   render() {
      return (
         <>
            <Header />
            {
               this.state.activeTab === 'home' &&
               <Banner
                  title="Hot off the press: "
                  text="Fighting hunger with chatbots"
                  link="https://here.com"
               />

            }
            <div className="max">
               <Route exact path="/" component={Home}/>
               <Route exact path="/projects" component={Projects}/>
            </div>
            <Footer/>
         </>
      );
   }
}

export default App;
