import React, { Component } from 'react';
import Intro from './body/intro';
import Work from './body/work';
import Entry from './body/entry';
import Background from './body/background';
import About from './About';
import Header from './Header';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sections:[
          'main',
          'showAbout',
          'entry',
        ],
        sectionSelected:0,
        entryId:0
    };
  }

  changeSection = (sectionName,entryId) => {
    let index = this.state.sections.indexOf(sectionName);

    if(sectionName === 'entry'){
      this.setState({'entryId':entryId,'sectionSelected':index});
    }else{
      this.setState({'sectionSelected':index});
    }
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
                return <Main onChange={this.changeSection} />;
              case 1:
                return <About onChange={this.changeSection}/>;
              case 2:
                return <Entry onChange={this.changeSection} entryId={this.state.entryId}/>;
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

  changeContent = (section,id) => {
    this.changeSection(section,id);
  }

  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <Intro onChange={this.changeContent}/>
        <Work onChange={this.changeContent}/>
        <Background onChange={this.changeContent}/>
      </div>
    );
  }
}

export default Body;
