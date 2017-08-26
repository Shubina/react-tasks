import React, { Component } from 'react';


const url = 'http://api.jyotish.gift';
const req = url + '/api/v1/auth';
const postUrl = req + '/login';





class SignUp extends Component {
	constructor(props) {
		super(props);
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
		if ( this.state.password !== this.state.password2 ) {
			console.log ('error');

		} else {

			let options = {
				method: 'POST',
				mode: 'cors',
				body: JSON.stringify({
					    user: this.state.name,
					    password: this.state.password
					  }),
				headers: new Headers ({
					"Content-Type": "application/json"
				})
			}

			let request = new Request(postUrl, options);

			fetch(request)
			.then((response) => {
		        if(response.ok) return response.json();
		        else throw new Error('Something went wrong on api server!');
		    })
		    .then(json => {
		    	return console.log(json);
		    })
		    .catch( (error) => {
		    	console.log(error)
		    });
		}
		e.preventDefault();
	}



	render() {
	  return (
	    <div>
	    	<form onSubmit={this.inputSubmit}>
	    		<label htmlFor="nameInput">User Name:</label>
	    		<input type="text" id="nameInput"  name="name" onChange={this.handleChange} value={this.state.name.value} />

				<label htmlFor="emailInput">User Email:</label>
	    		<input type="email" id="emailInput"  name="email" onChange={this.handleChange} value={this.state.email.value} />


				<label htmlFor="passInput">Password:</label>
	    		<input type="password" id="passInput"  name="password" onChange={this.handleChange} value={this.state.password.value} />

				<label htmlFor="confirmPassInput">Confirm Password:</label>
	    		<input type="password" id="confirmPassInput"  name="password2" onChange={this.handleChange} value={this.state.password2.value} />

	    		<button>Sign up</button>

	    	</form>

	    </div>
	  )
	}
}

export default SignUp;
