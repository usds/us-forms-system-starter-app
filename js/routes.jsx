import { createRoutes } from 'us-forms-system/lib/js/helpers';

import formConfig from './config/form';
import Form from './components/Form.jsx';

const route = {
  path: '/',
  component: Form,
  indexRoute: { onEnter: (nextState, replace) => replace('/introduction') },
  childRoutes: createRoutes(formConfig),
};

export default route;
