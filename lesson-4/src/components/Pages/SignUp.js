import React, { Component } from 'react';
import Api from '../../services/api';


class SignUp extends Component {

	render() {
		const { submit, formData } = this.props;
	  return (
	    <div>
	    	<form onSubmit={submit}>
	    		<label htmlFor="nameInput">User Name:</label>
	    		<input type="text" id="nameInput"  name="name" onChange={formData} value={this.state.name.value} />

				<label htmlFor="emailInput">User Email:</label>
	    		<input type="email" id="emailInput"  name="email" onChange={formData} value={this.state.email.value} />


				<label htmlFor="passInput">Password:</label>
	    		<input type="password" id="passInput"  name="password" onChange={formData} value={this.state.password.value} />

				<label htmlFor="confirmPassInput">Confirm Password:</label>
	    		<input type="password" id="confirmPassInput"  name="password2" onChange={formData} value={this.state.password2.value} />

	    		<button>Sign up</button>

	    	</form>

	    </div>
	  )
	}
}

export default SignUp;
