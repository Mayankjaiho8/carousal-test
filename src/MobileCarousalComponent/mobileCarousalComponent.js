import React, {Component} from 'react'

import './mobileCarousalComponent.css'

class MobileCarousalComponent extends Component {

	constructor(props){
		super(props);

		this.getImageComponent = this.getImageComponent.bind(this);
		this.updateCurrentSlideIndexHandler = this.updateCurrentSlideIndexHandler.bind(this);
	}

	updateCurrentSlideIndexHandler(delta){
		this.props.updateCurrentSlideIndex(delta);
	}

	getImageComponent(){
		const { imagesObjArr, currentSlideIndex } = this.props;
		
		const imageObj = imagesObjArr[currentSlideIndex];
		const imgUrl = './../images/arrows.svg'
		return (
				<div className = "mob-image-container">
					<img  src = {imageObj.userImageURL} />
					<div className="prev-mob-btn" onClick = { () => {this.updateCurrentSlideIndexHandler(-1)}}><img src = { imgUrl } /></div>
					<div className="next-mob-btn" onClick = { () => {this.updateCurrentSlideIndexHandler(1)}}><img src = { imgUrl } /></div>
				</div>
			)
	}

	render(){
		const { imagesObjArr, currentSlideIndex } = this.props;
			return (
				<section className = "mobile-carousal-container">
					{ imagesObjArr && imagesObjArr.length && this.getImageComponent()}
					<div className="image-caption">Image {currentSlideIndex + 1} Title</div>
				</section>
			)
	}
}

export default MobileCarousalComponent;