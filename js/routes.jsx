import React from 'react';
import { Route } from 'react-router-dom';

import { createFormPageList, createPageList } from 'us-forms-system/lib/js/helpers';
import FormPage from 'us-forms-system/lib/js/containers/FormPage';

import formConfig from './config/form';

function createRouteConfig(form) {
  const formPages = createFormPageList(form);
  const pageList = createPageList(form, formPages);

  const routeConfig = formPages
    .map(page => {
      return {
        path: page.path,
        component: page.component || FormPage,
        pageConfig: page,
        pageList,
        urlPrefix: form.urlPrefix
      };
    });

  return routeConfig;
}

function createRoutes(routeConfig) {
  routeConfig.map((route, i) => {
    const routeProps = {
      pageList: route.pageList,
      pageConfig: route.pageConfig,
      formConfig: route.formConfig,
      urlPrefix: route.urlPrefix
    };

    return (
      <Route key={i} exact path={route.path} render={props => (
        <route.component
          route={routeProps}
          {...props}/>
      )}/>
    );
  });
}

const routeConfig = createRouteConfig(formConfig);
export const routes = createRoutes(routeConfig);
