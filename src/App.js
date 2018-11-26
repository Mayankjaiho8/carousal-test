import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent/headerComponent';
import CarousalSlideComponent from './CarousalSlideComponent/carousalSlideComponent'

import axios from 'axios';

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
    this.updateCurrentSlideIndex = this.updateCurrentSlideIndex.bind(this);
    this.adjustCurrentSlideIndex = this.adjustCurrentSlideIndex.bind(this);

  }

  componentWillMount(){
    window.addEventListener('resize', this.setWindowDimension);
  }

  setWindowDimension(){
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    this.setState({...this.state, windowHeight, windowWidth});
  }

  adjustCurrentSlideIndex(currentSlideIndex){
    const { imagesObjArr } = this.state
    if(!imagesObjArr) 
      return 0;
    let len = imagesObjArr.length;

    return currentSlideIndex < 0 ? len + currentSlideIndex : ((currentSlideIndex)%len);
  }

  updateCurrentSlideIndex(delta){
    const { currentSlideIndex } = this.state;

    let updatedCurrentSlideIndex = currentSlideIndex + delta;
    updatedCurrentSlideIndex = this.adjustCurrentSlideIndex(updatedCurrentSlideIndex);

    this.setState({...this.state, currentSlideIndex: updatedCurrentSlideIndex})
  }

  componentDidMount(){
    const URL = 'https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39';

    axios.get(URL)
      .then(response => response.data)
      .then(response => response.hits)
      .then(imagesObjArr => { this.setState({...this.state, imagesObjArr})})
  }

  render() {
    const {windowHeight, windowWidth, imagesObjArr, currentSlideIndex } = this.state;
    return (
      <div className="app-container">
        <HeaderComponent />
        <CarousalSlideComponent currentWindowHeight = { windowHeight } currentWindowWidth = { windowWidth } imagesObjArr = { imagesObjArr }
                                currentSlideIndex = {currentSlideIndex } updateCurrentSlideIndex = { this.updateCurrentSlideIndex}/>
      </div>
    );
  }
}

export default App;
