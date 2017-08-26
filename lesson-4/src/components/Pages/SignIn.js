import React, { Component } from 'react';



class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			password: ''
		};
		this.updateInputName = this.updateInputName.bind(this);
	}

	updateInputName(e) {
		let propName = e.target.name;
		this.setState({	[propName]: e.target.value })
	}
	
render() {

console.log(this.state);
  return (
    <div>
    	<form>
    		<label htmlFor="nameInput">Name:</label>
    		<input type="text" id="nameInput" name="name" onChange={this.updateInputName} />

			<label htmlFor="passInput">Password:</label>
    		<input type="password" id="passInput" name="password" onChange={this.updateInputName} />

    	</form>
    </div>
  )
};

}
export default SignIn;
