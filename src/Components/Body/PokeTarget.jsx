import React from "react";
import data from './Data.js';
import "./PokeTarget.min.css";
import Header from "../Header/Header";
import { Link } from 'react-router'


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
              <div className="nextP">
                <Link to={{ pathname: '/pokeTarget/' + data.pokemonInfo[this.props.params.value-2].id }}>
                  <p>Prev:{data.pokemonInfo[this.props.params.value-2].name}</p>
                </Link>
                <Link to={{ pathname: '/pokeTarget/' + data.pokemonInfo[this.props.params.value].id }}>
                  <p>Next:{data.pokemonInfo[this.props.params.value].name}</p>
                </Link>
              </div>
              <div className="pokeDisp">
                <p>name:{data.pokemonInfo[this.props.params.value-1].name}</p>
          <img className="pokeImgTarget" src={data.pokemonInfo[this.props.params.value-1].img} alt="Pokemon"/>
          <p>height:{data.pokemonInfo[this.props.params.value-1].height}</p>
          <p>weight:{data.pokemonInfo[this.props.params.value-1].weight}</p>
          {/* <p>Evolution:{data.pokemonInfo[this.props.params.value-1].next_evolution.name}</p> */}
        </div>
    </div>
  </div>
</div>
)
}
}

export default PokeTarget;
