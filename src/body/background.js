import React, { Component } from 'react';

class Background extends Component {
  constructor(props) {
    super(props);
    this.changeSection = props.onChange;
  }


  showAbout = () => {
    this.changeSection('showAbout');
  }

  render() {
    return (
      <div className="card custom-content hide-on-hight-resolution"  >
        <div className="card-body">
          <h4 className="card-title">Background</h4>
          <p className="card-text">
          Start my career of developer with websites, web applications and playing around with the mobile develop.
          </p>
          <a onClick={this.showAbout} className="btn btn-outline-primary btn-pill">More</a>
        </div>
      </div>
    );
  }
}

export default Background;
