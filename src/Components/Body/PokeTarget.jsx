import React from "react";
import data from './Data.js';
// import PokeTargetCards from './PokeTargetCards.jsx'


class PokeTarget extends React.Component {

  constructor(){
    super();
    this.state={
    };
    // console.log(data.pokemonInfo[1].name)
  }

  render() {
    console.log(this.props.params.value)
    return (
      <div>
        <p>name:{data.pokemonInfo[this.props.params.value-1].name}</p>
        <img className="pokeImg" src={data.pokemonInfo[this.props.params.value-1].img} alt="Pokemon"/>
        <p>weight:{data.pokemonInfo[this.props.params.value-1].weight}</p>
        {/* {data.pokemonInfo.map((i, index) => { //map dans array pokemon // index pour definir key diff
           return (
             <PokeTargetCards weight={i.weight} key={index}/>
           )
        })} */}
     </div>
    )
  }
}

export default PokeTarget;
