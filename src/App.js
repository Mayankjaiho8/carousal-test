import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent/headerComponent';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      windowHeight:0,
      windowWidth : 0
    }

    this.setWindowDimension = this.setWindowDimension.bind(this);
  }

  componentWillMount(){
    window.addEventListener('resize', this.setWindowDimension);
  }

  setWindowDimension(){
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    this.setState({...this.state, windowHeight, windowWidth});
  }


  render() {
    return (
      <div className="app-container">
        <HeaderComponent />
      </div>
    );
  }
}

export default App;
