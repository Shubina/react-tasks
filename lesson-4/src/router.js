import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import SignIn from './components/Pages/SignIn';
import SignUp from './components/Pages/SignUp';
import Users from './components/Pages/Users';


class Router extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/" component={SignIn} exact />
					<Route path="/sign-up" component={SignUp} />
					<Route path="/users" component={Users} />
				</Switch>
			</div>
			)
	}
};
export default Router;
