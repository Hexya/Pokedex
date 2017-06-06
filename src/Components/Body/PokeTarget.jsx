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
        <Link to="/"><Header /></Link>
        <div className="containTGrid">
          <div className="gridTCards">
              <div className="nextP">
                <Link to={{ pathname: '/pokeTarget/' + data.pokemonInfo[this.props.params.value-2].id }}>
                  <p><i className="fa fa-angle-double-left" aria-hidden="true"></i> N°{data.pokemonInfo[this.props.params.value-2].num}</p>
                </Link>
                <Link to={{ pathname: '/pokeTarget/' + data.pokemonInfo[this.props.params.value].id }}>
                  <p>N°{data.pokemonInfo[this.props.params.value].num} <i className="fa fa-angle-double-right" aria-hidden="true"></i></p>
                </Link>
              </div>
              <div className="pokeDispName">
                <p>{data.pokemonInfo[this.props.params.value-1].name}</p>
              </div>

                <div className="pokeDispCont">
                <div className="pokeDispImg">

          <img className="pokeImgTarget" src={data.pokemonInfo[this.props.params.value-1].img} alt="Pokemon"/>
        </div>
          <div className="pokeStat">
          <div className="pokeStat1">
          <p><span>Height:</span> {data.pokemonInfo[this.props.params.value-1].height}</p>
          <p><span>Weight:</span> {data.pokemonInfo[this.props.params.value-1].weight}</p>
          <p><span>Weaknesses:</span> </p><p className="PoketType">{data.pokemonInfo[this.props.params.value-1].weaknesses}</p>
        </div>
          <div className="pokeStat2">
          <p><span>Number:</span> {data.pokemonInfo[this.props.params.value-1].num}</p>
          <p><span>Type:</span> {data.pokemonInfo[this.props.params.value-1].type}</p>
          {/* <p>Evolution:{data.pokemonInfo[this.props.params.value-1].next_evolution.name}</p> */}
        </div>
        </div>
    </div>
    <div className="pokeBot">
    <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/58337-200.png" alt="pokeball"></img>
    </div>
    </div>
  </div>
</div>
)
}
}

export default PokeTarget;
