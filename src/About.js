import React, { Component } from 'react';
import './about.css';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.changeSection = props.onChange;
  }


  showAbout = () => {
    this.changeSection('main');
  }

  render() {
    return (
      <div className="card custom-content"  >
      <div className="parallax hide-on-low-resolution"></div>
        <div className="card-body">
          <h4 className="card-title">Who I am</h4>
          <h6 className="card-subtitle mb-2 text-muted underline">Past day</h6>
          <p>
          A little about my story, at the beginning of my career I start to work in an enterprise oriented to the pharmaceutical area, but not as a developer
          just as a technical support, didn't stay to much time there due to my college starting.<br/><br/>

          Over the time at college, I make some courses of <a href="https://www.cisco.com">Cisco</a> with the intention to learn networking. Made the CCNA1 and CCNA2 this include some
          configuration to set a LAN, VLAN and manage of routers from the console.

          At the same time I start to study English at the <a href="http://www.ccpa.edu.py/">CCPA</a> also I was preparing to be a firefighter at the academy but due to the heavy time load,
          I can't make the vow.<br/><br/>

          After that I start to work for a postgraduate teacher building a platform for an auto parts seller, back then we used Java 7 with a framework called
          zkoss, this was to set the frontend with svn as repository and postgress as manager for the database.  <br/>
          </p>

          <p>
          During the career I made differents projects, I think that one of the biggest was one like Jira where we have to make a software that manages sprints, with user
          stories and that mixed with kanban metodology, so we have boards of kanban with users stories, handle of users (creation, edition and remove), reports, we display
          the bourndown chart, test covering, implementation of mail server, documentation of code and at the end we had to make kind of a concurrency test, all of this in
          like 6 months. We use as main framework Django (python 2.7), postgress and chart.js,a little of Jasper reports the test and the documentation we used the tools that
          Django offers, we use bitbucket as repository and I think that was all for this project, I can't remember which was the server that we use to handle the emails.
          <br/>
          </p>

          <p>
          After that, I start to experiment with android develop, when Google recently released and the IDE was eclipse and the emulator drains all your RAM, lucky
          for us then they add support to IntelliJ and appear genymotion. I did a little of developing for android with google maps, sqllite, handle of connections and
          storage and cross-communication with externals servers getting images codified in base64.  <br/>
          </p>

          <p>
          Then I start to experiment with react-native. Didn't spend too much time with this just some of the functionality like listing, connections cross servers, maps
          and always for android due I don't have a mac and I can compile the code for IOs test. The new for me here was learn react, npm, grunt and bower weren't new to
          me so didn't take too much time to learn. <br/>
          </p>

<h6 className="card-subtitle mb-2 text-muted underline">Present day</h6>
        <p>
        Now I'm working for an enterprise that develops educational software for the USA, it has the HQ in Minnesota but the developers work from Asuncion, Paraguay.
        We use Java 8, angularJs in some parts of the software in others angular 5, microservices, GitHub, mysql and I think that's all for this.<br/>
        </p>

        <p>
        Beyond that, I'm making my thesis for the college that has as base big data and the new thing that I would like to experiment is making apps with VR and Flutter .
        But all depends on my free time to dedicate. <br/>
         </p>

        <p>
        To close these section I consider myself as a full-stack developer, one particular area that I like is the UX but as mention
        before I already worked in different areas so Isn't a problem for me work as backend or frontend developer (except if it's database manager, that is
        an area were I can improve).<br/>
        </p>

          <a onClick={this.showAbout} className="btn btn-outline-primary btn-pill long">Take Me Home</a>
        </div>
      </div>
    );
  }
}

export default Intro;
