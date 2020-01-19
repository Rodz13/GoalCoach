import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import reducer from './reducers';
import App from './container/App.jsx';
import signIn from './components/signIn/signIn.jsx';
import signUp from './components/signUp/signUp.jsx';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
	if (user) {
		console.log("user has signed in or up", user);
		browserHistory.push('/app');
	} else {
		console.log("user has signed out ot in.");
		browserHistory.replace('/signin')
	}
});

ReactDOM.render(
	<Provider store={store}>
		<Router path="/" history={browserHistory}>
			<Route path="/app" component={App} />
			<Route path="/signin" component={signIn} />
			<Route path="/signup" component={signUp} />
		</Router>, 
		document.getElementById("root"),
	</Provider>
);