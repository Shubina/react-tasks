import React, { Component } from 'react';
import Router from '../../router.js';

import './Main.css';

class Main extends Component {
	constructor (props) {
		super(props);

	}
  render() {
  	const { submit, formData } = this.props;
    return (
      
        <main>
          
         <Router submit={submit} formData={formData}>{this.props.children}</Router>

        </main>
      
    );
  }
}

export default Main;
