import React, { Component  } from 'react';

import back1 from './background1.png'
import back2 from './background2.png'

class Work extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageList: [
        {
          src:back1,
          title:'Design Process',
          description:'This is the process where I explain how I create Dashpy design from the ground'
        },
        {
          src:back2,
          title:'Design Process1',
          description:'This is the process where I explain how I create Dashpy design from the ground2'
        }
      ],
      currentSlide:0
    };
  }

  changeImage = () => {

    if(this.state.currentSlide === 0){
      this.setState({currentSlide:1});
    }else{
      this.setState({currentSlide:0});
    }

    console.log(this.state.currentSlide)
  }

  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide custom-content" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={this.state.imageList[this.state.currentSlide].src} alt="First slide"/>
      <div className="carousel-caption d-md-block">
        <h5 className="text-white bold">{this.state.imageList[this.state.currentSlide].title}</h5>
        <p className="bold">{this.state.imageList[this.state.currentSlide].description}</p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={this.changeImage}>
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={this.changeImage}>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    );
  }
}

export default Work;
