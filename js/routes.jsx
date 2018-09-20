import React from 'react';
// import { createRoutes } from 'us-forms-system/lib/js/helpers';
import FormPage from 'us-forms-system/lib/js/containers/FormPage';
import ReviewPage from 'us-forms-system/lib/js/review/ReviewPage';
import { createFormPageList, createPageList } from 'us-forms-system/lib/js/helpers';

import formConfig from './config/form';
import Form from './components/Form.jsx';
import PageWithNavigation from './components/PageWithNavigation';

// const routes = createRoutes(formConfig);

/*
 * Create the routes based on a form config. This goes through each chapter in a form
 * config, pulls out the config for each page, then generates a list of Route components with the
 * config as props
 */
function createRoutes(formConfig) {
  const formPages = createFormPageList(formConfig);
  const pageList = createPageList(formConfig, formPages);
  let routes = formPages
    .map(page => {
      return {
        path: page.path,
        component: page.component || PageWithNavigation,
        pageConfig: page,
        pageList,
        urlPrefix: formConfig.urlPrefix
      };
    });
  if (formConfig.introduction) {
    routes = [
      {
        path: 'introduction',
        component: formConfig.introduction,
        formConfig,
        pageList
      }
    ].concat(routes);
  }

  return routes.concat([
    {
      path: 'review-and-submit',
      formConfig,
      component: ReviewPage,
      pageList
    },
    {
      path: 'confirmation',
      component: formConfig.confirmation
    },
    {
      path: '*',
      onEnter: (nextState, replace) => replace(formConfig.urlPrefix || '/')
    }
  ]);
}

const formConfigRoutes = createRoutes(formConfig);

const route = {
  path: '/',
  component: Form,
  indexRoute: {
    onEnter: (nextState, replace) => replace(formConfig.urlPrefix+formConfigRoutes[0].path)
  },
  childRoutes: formConfigRoutes,
};

export default route;
