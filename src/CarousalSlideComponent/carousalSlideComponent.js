import React, { Component } from 'react';

import MobileCarousalComponent from './../MobileCarousalComponent/mobileCarousalComponent'
import DesktopCarousalComponent from './../DesktopCarousalComponent/desktopCarousalComponent'

class CarousalSlideComponent {

	constructor(props){
		super(props);

		this.isMobileDeviceDimension = this.isMobileDeviceDimension.bind(this);
	}

	isMobileDeviceDimension(){
		const { currentWindowWidth } = this.props;

		return currentWindowWidth <= 480 && > 0;
	}

	render(){
		const { imageObjArr, currentSlideIndex } = this.props;

		return( this.isMobileDeviceDimension() ? <MobileCarousalComponent currentSlideIndex = { currentSlideIndex } imageObjArr = { imageObjArr }/> : 
				<DesktopCarousalComponent currentSlideIndex = { currentSlideIndex } imageObjArr = { imageObjArr } />
			)
	}
}

export default CarousalSlideComponent;