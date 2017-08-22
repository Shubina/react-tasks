import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  };


  render () {
  	return (
    <h1>
    	{this.props.counter}
    </h1>
  )
}
  }

  

export default Header;
