import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import image1 from './images/watch1.jpg';
import image2 from './images/watch2.jpg';
import image3 from './images/watch3.png';


class Carousel extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      slideCount: 0,
      key: 1
    }
  }

  nextSlide(){
    if(this.state.slideCount === 2){
      this.setState({
        slideCount: 0,
        key: this.state.key + 1
      });
    } else {
      this.setState({
        slideCount: this.state.slideCount + 1,
        key: this.state.key + 1
      });
    }
  }

  previousSlide(){
    if (this.state.slideCount === 0){
      this.setState({
        slideCount: 2,
        key: this.state.key - 1
      });
    } else {
      this.setState({
        slideCount: this.state.slideCount - 1,
        key: this.state.key - 1
      });
    }
  }
  render() {

    let imageList = [image1, image2, image3];

    return (
      <div className="carousel">
        <div className="carousel-viewport">
          <button className="arrow left" onClick={this.previousSlide.bind(this)}></button>
          <ReactCSSTransitionGroup
          transitionName= 'fade'
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          >
          <img key={this.state.key} src={imageList[this.state.slideCount]} alt="images from carousel"/>
          </ReactCSSTransitionGroup>
          <button className="arrow right" onClick={this.nextSlide.bind(this)}></button>
        </div>
      </div>

    );
  }
}

export default Carousel;
