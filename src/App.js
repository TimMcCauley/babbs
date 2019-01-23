import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";

//Components
import Header from './Components/Header/Header';

//Containers
import Home from './Containers/Home/Home';

class App extends Component {
  render() {
    return (
      <>
         <Header />
         <Route path="/" exact component={Home} />
      </>
    );
  }
}

export default App;
