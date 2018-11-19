import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';

import { createFormPageList, createPageList } from 'us-forms-system/lib/js/helpers';

import FormApp from 'us-forms-system/lib/js/containers/FormApp';
import FormPage from 'us-forms-system/lib/js/containers/FormPage';
import ReviewPage from 'us-forms-system/lib/js/review/ReviewPage';

import formConfig from '../config/form';
import Introduction from './Introduction';

const formPages = createFormPageList(formConfig);
const pageList = createPageList(formConfig, formPages);

export default function Form({ location }) {
  const introRoute = {
    pageList
  };

  const firstRoute = {
    pageList,
    pageConfig: formPages[0]
  };

  const secondRoute = {
    pageList,
    pageConfig: formPages[1]
  };

  const generalRoute = {
    pageList,
    formConfig
  };

  return (
    <div>
      <FormApp formConfig={formConfig} currentLocation={location}>

        <Switch>
          <Route exact path="/introduction" render={props => (
            <Introduction
              route={introRoute}
              {...props}/>
          )}/>

          <Route exact path="/first-chapter/first-page" render={props => (
            <FormPage
              route={firstRoute}
              {...props}/>
          )}/>

          <Route exact path="/first-chapter/second-page" render={props => (
            <FormPage
              route={secondRoute}
              {...props}/>
          )}/>

          <Route exact path="/review-and-submit" render={props => (
            <ReviewPage
              route={generalRoute}
              path="/review-and-submit"
              {...props}/>
          )}/>

          <Redirect exact from="/" to="/introduction"/>
        </Switch>
      </FormApp>
    </div>
  );
}

Form.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object
};

// {
//              routes.map((route, i) => {
//                const routeProps = {
//                pageList,
//                pageConfig: route.pageConfig
//              };

//                return (
//                  <Route key={i} exact path={route.path} render={props =>
//                    <route.component
//                      route={routeProps}
//                      {...props}/>
//                  }/>
//                );
//              })
//            }
