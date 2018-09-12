import React from 'react';

import FormApp from 'us-forms-system/lib/js/containers/FormApp';
import formConfig from '../config/form';

export default function Form({ location, children }) {
  return (
    <FormApp formConfig={formConfig} currentLocation={location}>
      {children}
    </FormApp>
  );
}

// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.updatePath = this.updatePath.bind(this);
//     // this.startForm = this.startForm.bind(this);
//   }

//   updatePath() {
//     this.props.router.push(this.props.routes[1].goToRoute());
//   }

//   render() {
//     return (
//       <FormApp formConfig={formConfig} currentLocation={this.props.location}>
//         {this.props.children}
//       </FormApp>
//     );
//   }
// }

// export default Form;
