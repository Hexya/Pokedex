import React, { Component } from 'react';
import Body from './Components/Body/Body.jsx';
import Header from './Components/Header/Header.jsx';

class App extends Component {

  constructor(){
    super();
    this.state={
      className : "App"
    };
  }

  change(element) {
    if((this.state.className === 'App')) {
      this.setState({
        className : 'theme2'
      });
    } else {
      this.setState({
        className : 'App'
      });
    }
  }


  render() {
    return (
      <div className={this.state.className}>
        <button onClick={this.change.bind(this)} className="btnTheme">Theme Switch</button>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
