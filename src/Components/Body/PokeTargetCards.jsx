import React from "react";
import data from './Data.js';

import _ from 'lodash'; // npm i lodash -S => .map

class PokeTargetCards extends React.Component {

  constructor(){
    super();
    this.state={
    };
  }

  render() {
    return (
      <div>
        <p>Weight:{this.props.weight}</p>
      </div>
  )
}
}

export default PokeTargetCards;
