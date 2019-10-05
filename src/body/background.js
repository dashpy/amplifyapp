import React, { Component } from 'react';

class Background extends Component {
  render() {
    return (
      <div className="card custom-content"  >
        <div className="card-body">
          <h4 className="card-title">Background</h4>
          <p className="card-text">
          My name is Federico Roman, I'm 28 yeards old, born in Paraguay,
          currently working on my thesis to get my degree on Informatic
          Enginner at ...
          </p>
          <a href="#" className="btn btn-outline-primary btn-pill">More</a>
        </div>
      </div>
    );
  }
}

export default Background;
