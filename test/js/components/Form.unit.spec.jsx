import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import Form from '../../../js/components/Form';

describe('Form <Form>', () => {
  it('should render', () => {
    const location = { pathname: '/testing' };
    const children = [];
    const tree = SkinDeep.shallowRender(
      <Form location={location}>
        {children}
      </Form>
    );

    expect(tree.everySubTree('Connect(FormApp)')).not.to.be.empty;
  });
});
