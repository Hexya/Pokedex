import React, { Component } from 'react';
import Request from 'superagent'; // npm i superagent -S => Get
import _ from 'lodash'; // npm i lodash -S => .map
import './Body.css';
import PokeCards from './PokeCards.jsx'
import imgPokemon from './Img.js';
// import { Link } from 'react-router'


class Body extends Component {
  constructor(){
    super();
    this.state={
       pokemon:null,
    };
     this.dataPokemon();
  }

   dataPokemon(){
     let url= 'http://pokeapi.co/api/v2/pokemon/?limit=15'
       Request.get(url).then(data => { // Function use url avec Get grace à 'superagent'
          console.log(data.body.results); // Test recup pokemon dans console
          console.log(data.body);
         this.pokeName(data.body.results); // Envoie data.body.results dans function pokeName
          console.log(imgPokemon);
          console.log(imgPokemon.PokeImgs["0"].img);
          console.log(imgPokemon.PokeImgs["1"].img);

       });
   }
   pokeName(results) {
       let pokemon = []; // Definition variable

     _.map(results, (e, index) => { // Function map qui retournera tout les name // Pas oublier objet en argument
         pokemon.push(e.name); // On push names dans pokemon
    });
      this.setState({pokemon:pokemon}); // Push places dans setState places
   }

  render() {

    return (
      <div>
        {_.map(this.state.pokemon, (e, index) => { //map dans array pokemon // index pour definir key diff
          return (
             <PokeCards name={e} key={index}/> // !!assign key diff pour les isoler et les exporter sous Poke
           )
        })}


      </div>

    );
  }
}

export default Body;
