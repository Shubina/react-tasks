import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './theme/index.css';
import App from './App';
import registerServiceWorker from './services/registerServiceWorker';



const render = Component => {
  ReactDOM.render(
  	<Router>
    	<Component />
	</Router>,
    document.getElementById('root')
  );
};
// webpack-dev-server
// 
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}

render(App);

registerServiceWorker();




