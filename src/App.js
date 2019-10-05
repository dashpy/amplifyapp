import React, { Component } from 'react';
import Body from './Body';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Dashpy</h2>
        </div>
          <Body/>
          <Footer/>
      </div>
    );
  }
}

export default App;
