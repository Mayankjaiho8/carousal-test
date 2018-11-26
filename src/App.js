import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent/headerComponent';
import CarousalSlideComponent from './CarousalSlideComponent/carousalSlideComponent'

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      windowHeight:0,
      windowWidth : 0,
      imagesObjArr : [],
      currentSlideIndex : 0,
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

  componentDidMount(){
    const = 'https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39';
    axios.get(URL)
      .then(response => response.hits)
      .then(imageObjArr => {this.setState({...this.state, imageObjArr})})
  }


  render() {
    const {windowHeight, windowWidth, imagesObjArr, currentSlideIndex } = this.state;

    return (
      <div className="app-container">
        <HeaderComponent />
        <CarousalSlideComponent windowHeight = { windowHeight } windowWidth = { windowWidth } imagesObjArr = { imagesObjArr }
                                currentSlideIndex = {currentSlideIndex }/>
      </div>
    );
  }
}

export default App;
