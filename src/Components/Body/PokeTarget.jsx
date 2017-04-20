import React from "react";
import data from './Data.js';
import PokeTargetCards from './PokeTargetCards.jsx'

class PokeTarget extends React.Component {

  constructor(){
    super();
    this.state={
    };
  }

  render() {
    return (
      <div>
        {data.pokemonInfo.map((i, index) => { //map dans array pokemon // index pour definir key diff
           return (
             <PokeTargetCards weight={i.weight} key={index}/>
           )
        })}
     </div>
    )
  }
}

export default PokeTarget;
