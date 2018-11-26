import React, { Component } from 'react';

import './desktopCarousalComponent.css'


class DesktopCarousalComponent extends Component {

	constructor(props){
		super(props)

		this.state = {
			currentWidthSum:0
		}
		this.getImageComponentArr = this.getImageComponentArr.bind(this);
		this.updateCurrentSlideIndexHandler = this.updateCurrentSlideIndexHandler.bind(this);
	}

	getImageComponentArr(){
		const { imagesObjArr, currentWindowWidth, currentSlideIndex } = this.props

		let newImageObjArr = []
		let arrLen = imagesObjArr.length;

		let newCurrentSum = this.state.currentWidthSum;
		let effectiveWindowWidth = Math.floor((currentWindowWidth)* 0.9);

		for(let i=currentSlideIndex; i<currentSlideIndex+5; i++){
			let currentArrIdx = this.adjustIndex(i, arrLen);
			let currentImageObj = imagesObjArr[currentArrIdx];
			
			
			currentImageObj && newImageObjArr.push(
							<div key = { currentArrIdx } className = "image-container">
								<img src = {currentImageObj.userImageURL} />
								<div className="image-caption">Image {currentArrIdx + 1} Title</div>
							</div>
						)	
			
		}

		return newImageObjArr;
	}

	adjustIndex(index, length){
		if(index >= 0)
			return (index%length);

		return index + length
	}

	updateCurrentSlideIndexHandler(delta){
		this.props.updateCurrentSlideIndex(delta);
	}

	render(){

		const { imagesObjArr, currentSlideIndex } = this.props;
		const newImageArr = this.getImageComponentArr();

			return (
				<section className = "desktop-carousal-container">
				<div className="image-arr-container">
					{ imagesObjArr && imagesObjArr.length && newImageArr}
				</div>					

				<div className="slide-navigation-bar">
					{ <button onClick = { () => { this.updateCurrentSlideIndexHandler(-1)} } className="prev-btn">Prev</button> } 
					{ <button onClick = { () => { this.updateCurrentSlideIndexHandler(1)} } className = "next-btn">Next</button> }
				</div>
				</section>
			)
		}
}

export default DesktopCarousalComponent;