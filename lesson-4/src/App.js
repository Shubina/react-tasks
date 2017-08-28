import React, { Component } from 'react';
import Api from './services/api';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components//Main/Main';

import './theme/App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			password: '',
			password2: '', 
			email: ''
		};
		this.inputSubmit = this.inputSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		}

		handleChange (e) {
		let propName = e.target.name;
		this.setState({	[propName]: e.target.value });

	}

	inputSubmit(e) {
		e.preventDefault();

		Api.signUser();
		/* window.localStorage.setItem('rr_login', this.state)
*/
		

	}
  render() {
    return (
      <div className="App">
        <Header />
        <Main 
        	submit = {this.inputSubmit}
        	formData = {this.handleChange}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
