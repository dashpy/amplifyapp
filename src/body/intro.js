import React, { Component } from 'react';
import profile from './profile.png';
import back1 from './background1.png';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.changeSection = props.onChange;
  }

  showAbout = () => {
    this.changeSection('showAbout');
  }

  render() {
    return (
      <div className="row">

      <div className="col-sm-4">
        <div className="card mb-3 custom-content custom-card-position" >
          <div className="row no-gutters">
            <div className="col-md-4 hide-on-low-resolution">
              <img src={profile} className="card-img custom-card-image" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Who I am</h5>
                <p className="card-text">My name is Federico Roman, I'm 28 yeards old, born in Paraguay,
                I'm a web developer currently working on my thesis to get my
                degree on Informatic Enginner.</p>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="col-sm-4 hide-on-low-resolution">
          <div className="card mb-3 custom-content custom-card-position" >
            <div className="row no-gutters">
              <div className="col-md-4 hide-on-low-resolution">
                <img src={back1} className="card-img background-custom" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Background</h5>
                  <p className="card-text">Start my career of developer with websites, web applications and playing around with the mobile develop.
                  </p>
                  <p className="card-text">
                  <a onClick={this.showAbout} className="anchor">Read More</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="col-sm-4 hide-on-low-resolution">
            <div className="card mb-3 custom-content custom-card-position" >
              <div className="row no-gutters">
                <div className="col-md-12">
                  <div className="card-body">
                    <h5 className="card-title">Summary of Skills</h5>
                    <p className="card-text">My main skills are in the frontend side, using libraries like AngularJs or React. I also work in the backend
                     with tools like Java or Python. I got a little experience with mobile development. To conclude, my principal area where I like to grow
                      is the user experiences.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>

    </div>
    );
  }
}

export default Intro;
