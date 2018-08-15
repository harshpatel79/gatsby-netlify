import React, { Component } from 'react'
import Link from 'gatsby-link'
import contentstack from 'contentstack'

class SecondPage extends Component {
  constructor (props) {
      super(props);
      this.state = {
          entry:{}
      };
  }

  componentDidMount() {
    let apicalls = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
              console.log(json)
              this.setState({
                  entry: json
              });
            })
    }
    apicalls();
  }

  getfieldData(entry){
    return <li dangerouslySetInnerHTML={{__html: entry.name}} key={entry.id}></li> 
  }



  render() {
    if(this.state && this.state.entry && this.state.entry.length){
      const entry = this.state.entry.map(data => {
        return this.getfieldData(data);
      });
      return (
        <div>
          <ul>{entry}</ul>
          <div>
            <Link to="/contentstack">Go to contentstack page</Link>
          </div>
        </div>
      );
    } else {
      return (
        <div>Loading.....</div>
      );
    }
    
  }


}

export default SecondPage
