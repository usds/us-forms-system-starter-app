import { createRoutes, createFormPageList, createPageList } from 'us-forms-system/lib/js/helpers';

import { Route } from 'react-router-dom';

import formConfig from './config/form';
import Form from './components/Form.jsx';

const routes = createRoutes(formConfig);

const formPages = createFormPageList(formConfig);
export const pageList = createPageList(formConfig, formPages);

// const route = {
//   path: '/',
//   component: Form,
//   indexRoute: {
//     onEnter: (nextState, replace) => replace(formConfig.urlPrefix + routes[0].path)
//   },
//   childRoutes: routes,
// };

// const route = [
// 	<Route path={} component={}/>,
// 	<Route path={} component={}/>
// ];

// export default route;
