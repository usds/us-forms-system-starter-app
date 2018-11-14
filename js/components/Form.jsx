import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';

import FormApp from 'us-forms-system/lib/js/containers/FormApp';
import FormPage from 'us-forms-system/lib/js/containers/FormPage';
import { createRoutes } from 'us-forms-system/lib/js/helpers';

import formConfig from '../config/form';
import Introduction from './Introduction';
import { pageList } from '../routes';

const routes = createRoutes(formConfig);

export default function Form({ location }) {
  console.log(routes);
  console.log(location);

  return (
 		<div>
 			
	    <FormApp formConfig={formConfig} currentLocation={location}>

	    </FormApp>
    </div>
  );
}

Form.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object
};

// <Route exact path="" render={() => <Redirect to="/introduction" component={Introduction}/>} />

// <Route exact path="" render={props => 
//             <Introduction pageList={pageList} {...props} />
//         } />
// 			  <Route exact path="/first-chapter/first-page" component={FormPage} />
// 			  <Route exact path="/first-chapter/second-page" component={FormPage} />

				// <Switch>
		  //   	{routes.map(route => <Route exact path={route.path} component={route.component} />)}
				// </Switch>	

	    	// <Switch>
			   //  <Route exact path="/first-chapter/first-page" component={FormPage} />
	 			 //  <Route exact path="/first-chapter/second-page" component={FormPage} />
	 			 //  <Route exact path="/introduction" component={Introduction}/>
 			  // </Switch>