import React, {Component} from 'react'

import './mobileCarousalComponent.css'

class MobileCarousalComponent extends Component {

	constructor(props){
		super(props);

		this.getImageComponent = this.getImageComponent.bind(this);
	}

	getImageComponent(){
		const { imageObjArr, currentSlideIndex } = this.props;
		const imageObj = imageObjArr[currentSlideIndex];

		return (
				<div className = "image-container">
					<img  src = {imageObj.imageURL} />
					<div className="prev-mob-btn"></div>
					<div className="next-mob-btn"></div>
				</div>
			)
	}

	render(){
		const { imageObjArr, currentSlideIndex } = this.props;
			return (
				<section className = "mobile-carousal-container">
					{ imageObjArr && imageObjArr.length && this.getImageComponent()}
					<div className="image-caption">Image {currentSlideIndex + 1} Title</div>
				</section>
			)
	}
}

export default MobileCarousalComponent;