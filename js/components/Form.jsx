import React from 'react';

import FormApp from './FormApp';
import formConfig from '../config/form';

export default function Form({ location, children }) {
  return (
    <FormApp formConfig={formConfig} currentLocation={location}>
      {children}
    </FormApp>
  );
}
