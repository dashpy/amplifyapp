import React, { Component  } from 'react';
import DOMPurify from 'dompurify'

class Entry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      entryId:props.entryId,
      entry:{
        content:''
      }
    };

    this.onChange = props.onChange;
  }

  componentDidMount(){
    fetch("https://mighty-bastion-73936.herokuapp.com/api/entries/"+this.state.entryId)
      .then(response => response.json())
      .then(json => {
        json.content = JSON.parse(json.content);
        json.content = json.content.replace(/font-family: Georgia, serif/gi,'font-family:sans-serif');
        json.content = json.content.replace(/font-size: 18/gi,'font-size:14');
        json.content = json.content.replace(/font-size: 19/gi,'font-size:14');
        this.setState({'entry':json});
      });
  }

  render() {
    return (

      <div className="card">
        <div className="card-body">
            <div className="card-title">
              <h3>{this.state.entry.title}</h3>
            </div>
            <p className="card-text text-muted">
            {this.state.entry.description}
            </p>
            <hr/>
            <div className="content"
            dangerouslySetInnerHTML={
              {__html: DOMPurify.sanitize(this.state.entry.content)}
            }>
              </div>
        </div>
      </div>
    );
  }
}


export default Entry;
