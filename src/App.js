import React, { Component } from 'react';
import Body from './Components/Body/Body.jsx';
import Header from './Components/Header/Header.jsx';

class App extends Component {

  constructor(){
    super();
    this.state={
      className : "img1",
      classNames : "App"
    };
  }
  changeImg(element) {
    if((this.state.className === 'img1')) {
      this.setState({
        classNames : 'img2'
      });
    } else {
      this.setState({
        classNames : 'img1'
      });
    }
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
    setTimeout(function(){
      this.changeImg(element)
    },1000)
  }


  render() {
    return (
      <div className={this.state.className}>
        <button onClick={this.change.bind(this)} className="btnTheme">Click Bitch</button>
        {/* <button onClick={this.changeImg.bind(this)} className="btnTheme">Click Bitch</button> */}
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
