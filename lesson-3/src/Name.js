import React, { Component } from 'react';

class Name extends Component {
	constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  };

  componentWillReceiveProps(nextProps) {
  	console.log(nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
  	return (nextProps.counter % 3 === 0) ? true : false;
  
  }

  componentWillUpdate(nextProps, nextState) {
      
  }

  componentDidUpdate(prevProps, prevState) {
      
  }

componentWillUnmount() {
    
}

  render () {
  	return (
    <h1>
    	{this.props.counter}
    </h1>
  )
}
  }

  

export default Name;
