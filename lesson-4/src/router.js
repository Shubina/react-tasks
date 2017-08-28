import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import SignIn from './components/Pages/SignIn';
import SignUp from './components/Pages/SignUp';
import Users from './components/Pages/Users';


const Router = () => {

	function checkLogin(nextState, replace) {
	  const login = window.localStorage.getItem('rr_login');
	  if (login !== 'admin') {
	    replace('/')
	  }
	}
	
		return (
			<div>
				<Switch>
					<Route path="/" component={SignIn} exact />
					<Route path="/sign-up" component={SignUp} />
					<Route path="/users" component={Users} onEnter={Users.checkLogin} />
				</Switch>
			</div>
			)

};
export default Router;
