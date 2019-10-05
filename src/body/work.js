import React, { Component  } from 'react';

import back1 from './background1.png'
import back2 from './background2.png'
import {  Swipeable } from 'react-swipeable'

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
  }

  swipe = (eventData) => {
    console.log(eventData.dir)
    this.changeImage();
  }

  render() {
    return (
      <div>
        <div className="hide-on-low-resolution">
          <h3 className="text-muted text-center">Articles</h3>
          <div className="row">
            <div className="col-sm-4">
            <div className="card custom-content">
   <div className="card-body">
     <h5 className="card-title">Designing Process</h5>
     <p className="card-text">I will describe the process that I use in a project, going from the idea to a prototype in high fidelity.</p>
     <p className="card-text">
     <a className="anchor">Read More</a>
     </p>
   </div>
 </div>
            </div>

            <div className="col-sm-4">
            <div className="card custom-content">
   <div className="card-body">
     <h5 className="card-title">Proof of concept - Materialize</h5>
     <p className="card-text">The idea with material design is to keep a UI really clean and simple, material design was one of the big ...</p>
     <p className="card-text">
     <a className="anchor">Read More</a>
     </p>
   </div>
 </div>
            </div>

            <div className="col-sm-4">
            <div className="card custom-content">
   <div className="card-body">
     <h5 className="card-title">Deploying an Application in heroku</h5>
     <p className="card-text">This is a brief experience that I had using node as a server, the intention of this article is to show ...</p>
     <p className="card-text">
     <a className="anchor">Read More</a>
     </p>
   </div>
 </div>
            </div>
          </div>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide custom-content hide-on-hight-resolution" data-ride="carousel">
          <ol className="carousel-indicators">
            <li  data-slide-to="0" className={this.state.currentSlide === 0 ? 'active' : ''}></li>
            <li   data-slide-to="1" className={this.state.currentSlide === 1 ? 'active' : ''}></li>
          </ol>
          <Swipeable onSwiped={this.swipe} >

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={this.state.imageList[this.state.currentSlide].src} alt="First slide"/>
              <div className="carousel-caption d-md-block">
                <h5 className="text-white bold">{this.state.imageList[this.state.currentSlide].title}</h5>
                <p className="bold">{this.state.imageList[this.state.currentSlide].description}</p>
              </div>
            </div>
          </div>
          </Swipeable>

          <a className="carousel-control-prev"   role="button" data-slide="prev" onClick={this.changeImage}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next"   role="button" data-slide="next" onClick={this.changeImage}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Work;
