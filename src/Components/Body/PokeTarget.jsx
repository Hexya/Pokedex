import React from "react";
import data from './Data.js';
import "./PokeTarget.min.css";
import Header from "../Header/Header";
// import PokeTargetCards from './PokeTargetCards.jsx'


class PokeTarget extends React.Component {

  constructor(){
    super();
    this.state={
    };
    console.log(data.pokemonInfo[0].name)
    console.log(data.pokemonInfo[0].next_evolution[0].name)
    console.log(data.pokemonInfo[0].next_evolution[1].name)
  }

  render() {
    console.log(this.props.params.value)
    return (
      <div>
        <Header />
        <div className="containTGrid">
          <div className="gridTCards">
          <div className="targetCards">
            <p>name:{data.pokemonInfo[this.props.params.value-1].name}</p>
            <img className="pokeImgTarget" src={data.pokemonInfo[this.props.params.value-1].img} alt="Pokemon"/>
            <p>weight:{data.pokemonInfo[this.props.params.value-1].weight}</p>
            <p>Evolution:{data.pokemonInfo[this.props.params.value-1].ev}</p>
            {/* {data.pokemonInfo.map((i, index) => { //map dans array pokemon // index pour definir key diff
              return (
              <PokeTargetCards weight={i.weight} key={index}/>
            )
          })} */}
        </div>
        </div>
      </div>
    </div>
  )
}
}

export default PokeTarget;
