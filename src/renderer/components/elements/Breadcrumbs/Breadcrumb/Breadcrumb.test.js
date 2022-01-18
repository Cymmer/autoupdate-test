import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from './index';

describe('RENDERING - Breadcrumbs > Breadcrumb', () => {
  it('should render with default props', () => {
    const component = shallow(
      <Breadcrumb link="www.codechum.com">Test</Breadcrumb>
    );
    expect(component).toMatchSnapshot();
  });

  it('should not render an icon if it is active', () => {
    const component = shallow(
      <Breadcrumb active link="www.codechum.com">
        Test
      </Breadcrumb>
    );
    expect(component).toMatchSnapshot();
  });
});
