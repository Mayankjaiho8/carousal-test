import React, { Component } from 'react';

import './desktopCarousalComponent.css'


class DesktopCarousalComponent extends Component {

	constructor(props){
		super(props)

		this.getImageComponentArr = this.getImageComponentArr.bind(this);
		this.updateCurrentSlideIndexHandler = this.updateCurrentSlideIndexHandler.bind(this);
	}

	getImageComponentArr(){
		const { imageObjArr } = this.props

		return imageObjArr.map((imageObj, index) => (
														<div key = { index } className = "image-container">
															<img  src = {imageObj.imageURL} />
															<div className="image-caption">Image {index + 1} Title</div>
														</div>
													)
								)
	}

	updateCurrentSlideIndexHandler(delta){
		this.props.updateCurrentSlideIndex(delta);
	}

	render(){

		const { imageObjArr, currentSlideIndex } = this.props;
			return (
				<section className = "desktop-carousal-container">
					{ imageObjArr && imageObjArr.length && this.getImageComponentArr()}

					<div className="slide-navigation-bar">
						{ <button onClick = { this.updateCurrentSlideIndexHandler(-1) } className="prev-btn">Prev</button> } 
						{ <button onClick = { this.updateCurrentSlideIndexHandler(1) } className = "next-btn">Next</button> }
					</div>
				</section>
			)
		}
}

export default DesktopCarousalComponent;