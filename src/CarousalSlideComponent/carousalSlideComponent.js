import React, { Component } from 'react';

import MobileCarousalComponent from './../MobileCarousalComponent/mobileCarousalComponent'
import DesktopCarousalComponent from './../DesktopCarousalComponent/desktopCarousalComponent'

class CarousalSlideComponent extends Component {

	constructor(props){
		super(props);

		this.isMobileDeviceDimension = this.isMobileDeviceDimension.bind(this);
	}

	isMobileDeviceDimension(){
		const { currentWindowWidth } = this.props;
		
		return currentWindowWidth <= 480 && currentWindowWidth > 0;
	}

	render(){
		const { imagesObjArr, currentWindowWidth, currentSlideIndex, updateCurrentSlideIndex } = this.props;
		return this.isMobileDeviceDimension() ? (<MobileCarousalComponent updateCurrentSlideIndex = { updateCurrentSlideIndex } 
													currentSlideIndex = { currentSlideIndex } imagesObjArr = { imagesObjArr }
													currentWindowWidth = { currentWindowWidth } />) : 
												   (<DesktopCarousalComponent updateCurrentSlideIndex = { updateCurrentSlideIndex } 
												   	currentSlideIndex = { currentSlideIndex } imagesObjArr = { imagesObjArr } />)
	}
}

export default CarousalSlideComponent;