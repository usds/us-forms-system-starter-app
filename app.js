import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRedirect, Route, Router, useRouterHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { createHistory } from 'history';

import 'us-forms-system/lib/css/styles.css';

import route from './js/routes.jsx';
import reducer from './js/reducers';
import Form from './js/components/Form.jsx';

const store = createStore(combineReducers(reducer));

const browserHistory = useRouterHistory(createHistory)({
  basename: ''
});

ReactDOM.render(
	(
	  <Provider store={store}>
      <Router history={browserHistory}>
      	{route}
      </Router>
    </Provider>
	), document.getElementById('root')
);
