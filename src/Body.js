import React, { Component } from 'react';
import Intro from './body/intro';
import Work from './body/work';
import Background from './body/background';
import About from './About';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sections:[
          'main',
          'showAbout',
          'showBackground',
        ],
        sectionSelected:0
    };
  }

  changeSection = (sectionId) => {
    let index = this.state.sections.indexOf(sectionId);
    this.setState({'sectionSelected':index});
  }

  goMain = () =>{
    this.changeSection('main');
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <h2 onClick={this.goMain} className="cursor-pointer"> Dashpy</h2>
        </div>
        <div className="container-fluid">
          {(()=> {
            switch (this.state.sectionSelected) {
              case 0:
                return <Main onChange={this.changeSection}/>;
              case 1:
                return <About onChange={this.changeSection}/>;
              default:
                return <Main onChange={this.changeSection}/>;
            }
          })()}
        </div>
      </div>
    );
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.changeSection = props.onChange;
  }

  changeContent = (section) => {
    this.changeSection(section);
  }

  render() {
    return (
      <div className="container-fluid">
        <Intro onChange={this.changeContent}/>
        <Work/>
        <Background onChange={this.changeContent}/>
      </div>
    );
  }
}

export default Body;
