import React from "react";
import _ from 'lodash'; // npm i lodash -S => .map
import './PokeCards.min.css';
import { Link } from 'react-router'

class PokeCards extends React.Component {

  constructor(){
    super();
    this.state={
    };
  }

  render() {
    return (
    <Link to={{ pathname: '/pokeTarget/' + this.props.id }}>
      <div className="contCards">
        <p className="numberPok">N°{this.props.num}</p>
        <div className="contImg">
          <img className="pokeImg" src={this.props.img} alt="Pokemon"/>
        </div>
        <div className="pokeInf">
          <p className="namePok">{this.props.name}</p>
          <p className="typePok">{this.props.type}</p>
        </div>
      </div>
    </Link>
  )
}
}

export default PokeCards;
