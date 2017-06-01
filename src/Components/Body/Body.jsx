import React, { Component } from 'react';
// import Request from 'superagent'; // npm i superagent -S => Get
import _ from 'lodash'; // npm i lodash -S => .map
import './Body.min.css';
import PokeCards from './PokeCards.jsx'
import data from './Data.js';
// import { Link } from 'react-router'


class Body extends Component {
  constructor(){
    super();
    this.state={
    };
  }

  render() {

    return (
      <div>
        {/* <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.."></input> */}
        <div className="img1">
        <div className="containGrid">
          <div className="gridCards">
            {data.pokemonInfo.map((e, index) => { //map dans array pokemon // index pour definir key diff
              return (
                <PokeCards img={e.img} name={e.name} type={e.type} num={e.num} id={e.id} key={index}/> // !!assign key diff pour les isoler et les exporter sous Poke
              )
            })}
          </div>
        </div>
        </div>
        <div className="img2">
        <div className="containGrid2">
          <div className="gridCards2">
            {data.pokemonInfo.map((e, index) => { //map dans array pokemon // index pour definir key diff
              return (
                <PokeCards img={e.img2} name={e.name} type={e.type} num={e.num} id={e.id} key={index}/> // !!assign key diff pour les isoler et les exporter sous Poke
              )
            })}
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Body;
