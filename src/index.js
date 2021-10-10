import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import allReducer from './store/store';

import './index.css';

const store = createStore(allReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
