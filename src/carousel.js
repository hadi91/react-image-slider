import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import image1 from './images/watch1.jpg';
import image2 from './images/watch2.jpg';
import image3 from './images/watch3.png';


class Carousel extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      slideCount: 0,
      key: 1,
      transition: ''
    }
  }

  nextSlide(){
    if(this.state.slideCount === 2){
      this.setState({
        slideCount: 0,
        key: this.state.key + 1,
        transition: 'slide'
      });
    } else {
      this.setState({
        slideCount: this.state.slideCount + 1,
        key: this.state.key + 1,
        transition: 'slide'
      });
    }
  }

  previousSlide(){
    if (this.state.slideCount === 0){
      this.setState({
        slideCount: 2,
        key: this.state.key - 1,
        transition: 'leave'
      });
    } else {
      this.setState({
        slideCount: this.state.slideCount - 1,
        key: this.state.key - 1,
        transition: 'leave'
      });
    }
  }
  render() {

    let imageList = [image1, image2, image3];

    return (
      <div className="carousel">
        <div className="image-slider">
          <button id="previous" onClick={this.previousSlide.bind(this)} className="arrow left"></button>
          <ReactCSSTransitionGroup
          transitionName={this.state.transition}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          <img key={this.state.key} src={imageList[this.state.slideCount]} alt=""/>
          </ReactCSSTransitionGroup>
          <button id="next" onClick={this.nextSlide.bind(this)} className="arrow right"></button>
        </div>
      </div>

    );
  }
}

export default Carousel;
