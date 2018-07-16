import { createRoutes } from 'us-forms-system/lib/js/helpers';

import formConfig from './config/form';
import Form from './components/Form.jsx';

const routes = createRoutes(formConfig);

const route = {
  path: '/',
  component: Form,
  indexRoute: { onEnter: (nextState, replace) => replace(routes[0].path) },
  childRoutes: routes,
};

export default route;
