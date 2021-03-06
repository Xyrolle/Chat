import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import Join from './components/Join';
import Chat from './components/Chat';

const App = () => {
	return (
		<Router>
			<Route exact path='/' component={Join} />
			<Route path='/chat' component={Chat} />
		</Router>
	);
};

export default App;
