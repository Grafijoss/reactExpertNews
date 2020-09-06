import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux' // we have to wrap the app with provider
import { createStore, combineReducers } from 'redux'
// if we have more than 1 reducer we have to cambine them
import { reducer as formReducer } from 'redux-form'
// we import the library to hanfdle forms
import * as reducers from './reducers'
// to evoid to import all of the reduceres from main index we create a redux file to handle all of them
import * as serviceWorker from './serviceWorker';

// we have to pass the reducers as arguments
const store = createStore(combineReducers({
	...reducers, // sprite operator
	form: formReducer,
}))

	ReactDOM.render(
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>,
		document.getElementById('root')
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
