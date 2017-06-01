import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';
import About from './Components/About/About.jsx'
import PokeTarget from './Components/Body/PokeTarget.jsx'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/pokeTarget/:value" component={PokeTarget}/>
  </Router>
), document.getElementById('root'))
