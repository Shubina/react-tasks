import React, { Component } from 'react';
import RepoItem from './RepoItem.js';

const url = "https://api.github.com/users/Shubina/repos";

class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    
  };

  componentDidMount() {
    fetch(url).then(data => data.json()).then(data => {
      console.log(data);
      this.setState({ data: data});

    });
  }


  render() {
    return (
      <ul>
        {this.state.data.map((elem, index) => {
          return (
              <RepoItem key={index}>
                <span>{elem.id} </span>
                <span> {elem.name}</span>
              </RepoItem>
            )
          })
        }
      </ul>
    );
  }
}

export default Github;
