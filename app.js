import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
// import { createHistory } from 'history';

import 'us-forms-system/lib/css/styles.css';

import reducer from './js/reducers';
import Form from './js/components/Form.jsx';

const store = createStore(combineReducers(reducer));

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Form}/>
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root')
);
