import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";

//Components
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer'

//Containers
import Home from './Containers/Home/Home';

class App extends Component {
  render() {
    return (
      <>
         <Header />
         <Banner
            title="Hot off the press: "
            text="Fighting hunger with chatbots"
            link="https://here.com"
         />
         <div className="max">
            <Route path="/babbs" exact component={Home} />
         </div>
         <Footer />
      </>
    );
  }
}

export default App;
