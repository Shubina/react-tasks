import React, { Component } from 'react';



class TabsContainer extends Component {
	constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  };


  render () {
  	return (
      <div>{this.props.children}</div>

      
    /*
            <Github />

              <Header counter={this.state.counter}></Header>

              <button onClick={() => {
                this.setState({
                  counter: this.state.counter + 1
                });
              }}>INCREMENT</button>

              <Name name = {this.state.name} /> */
          
    
  )
}
  }

  

export default TabsContainer;
