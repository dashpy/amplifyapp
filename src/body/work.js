import React, { Component  } from 'react';

import back1 from './background1.png'
import './work.css';
import {  Swipeable } from 'react-swipeable'

class Work extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageList: [],
      currentSlide:0,
      loading:true
    };

    this.onChange = props.onChange;
  }

  componentDidMount(){
    fetch("https://mighty-bastion-73936.herokuapp.com/api/entries")
      .then(response => response.json())
      .then(json => {
        let newJson = json.map(item => {
          item.src = back1;
          return item;
        })
          this.setState({imageList:newJson, loading:false});
      });
  }

  goToEntry = (entryId) => {
    return this.onChange('entry',entryId);
  }

  render() {
    return (
      <div>
        {
            this.state.loading ?
            <div className="d-flex justify-content-center">
              <div className="spinner-grow center-spiner" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
              :
            <div>
              <Entry value={this.state} onGoEntry={this.goToEntry} />
              <MobileEntry
              value={this.state}
              onSwipe={this.swipe}
              onChangeImage={this.changeImage}/>
            </div>
        }

      </div>
    );
  }
}



class MobileEntry extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentSlide: props.value.currentSlide,
      imageList: props.value.imageList
    }
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



  render(){
    return (
      <div id="carouselExampleIndicators" className="carousel slide custom-content hide-on-hight-resolution" data-ride="carousel">
       <ol className="carousel-indicators">
       {this.state.imageList.map((item,index) => (
          <li key={item.id}
         data-slide-to={index}
         className={this.state.currentSlide === index ? 'active' : ''}>
         </li>
       ))}
       </ol>
       <Swipeable onSwiped={this.swipe} >
         <div className="carousel-inner">
       {
         this.state.imageList.map((item,index) => (
           <div className={this.state.currentSlide === index ?
             'carousel-item active' : 'carousel-item'} key={index} >
                   <img className="d-block w-100"
                   src={item.src}
                   alt={item.title}/>
                   <div className="carousel-caption d-md-block">
                     <h5 className="text-white bold">{item.title}</h5>
                     <p className="bold">{item.description}</p>
                   </div>

           </div>
           ))}
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
    )
  }
}


class Entry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: props.value.currentSlide,
      imageList: props.value.imageList
    }

    this.onGoEntry = props.onGoEntry;
  }

  goToEntries = (id) => {
    this.onGoEntry(id);
  }

  render(){
    return (
      <div className="hide-on-low-resolution">
        <h3 className="text-muted text-center">Articles</h3>

          <div className="row">
          {
            this.state.imageList.map(item => (
              <div className="col-sm-4" key={item.id}>
                  <div className="card custom-content">
                     <div className="card-body">
                       <h5 className="card-title">{item.title}</h5>
                       <p className="card-text">{item.description}.</p>
                       <p className="card-text">
                       <a className="anchor" onClick={()=> this.goToEntries(item.id)}>Read More</a>
                       </p>
                     </div>
                   </div>
                 </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Work;
