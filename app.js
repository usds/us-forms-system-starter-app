import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { createHistory } from 'history';

import 'us-forms-system/lib/css/styles.css';

import route from './js/routes.jsx';
import reducer from './js/reducers';
import Form from './js/components/Form.jsx';
import Introduction from './js/components/Introduction';


const store = createStore(combineReducers(reducer));

// const browserHistory = useRouterHistory(createHistory)({
//   basename: ''
// });

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
      	<div>
      		<Route exact path="" component={Form}/>

        </div>
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root')
);

        	// <Route exact path="" component={Form}/>
        	// <Route exact path="" render={() => <Redirect to="/introduction"/>} />

	    // <Route exact path="" render={() => <Redirect to="/introduction" component={Introduction}/>} />
// <Route exact path="" render={() => <Redirect to="/introduction" component={Introduction} />} />
// {route}
// <Route exact path="/" component={Form}/>

// <Route exact path="" render={() => <Redirect to="/introduction" component={Introduction}/>} />