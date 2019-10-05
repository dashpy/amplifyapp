import React, { Component } from 'react';
import Intro from './body/intro';
import Work from './body/work';
import Background from './body/background';

class Body extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Intro/>
        <Work/>
        <Background/>
      </div>
    );
  }
}

export default Body;
