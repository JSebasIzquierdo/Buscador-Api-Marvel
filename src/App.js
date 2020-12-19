import React from 'react';
import './App.css';
import HomeLayout from './components/HomeLayout/HomeLayout';
import { BrowserRouter, Switch, Route, Link, withRouter } from "react-router-dom";
import RoutesHero from './components/RoutesHero/RoutesHero';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesHero />
      </BrowserRouter>

    </div>
  );
}

export default App;
