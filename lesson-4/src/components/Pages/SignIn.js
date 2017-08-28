import React, { Component } from 'react';
import Api from '../../services/api';


class SignIn extends Component {

	
render() {
const { submit, formData } = this.props;
  return (
    <div>
    	<form onSubmit={submit}>
	    		<label htmlFor="nameInput">User Name:</label>
	    		<input type="text" id="nameInput"  name="name" onChange={formData} />

				<label htmlFor="passInput">Password:</label>
	    		<input type="password" id="passInput"  name="password" onChange={formData} />

	    		<button>Sign up</button>

	    	</form>
    </div>
  )
};

}
export default SignIn;
