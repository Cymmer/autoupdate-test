import React from 'react';
import { shallow } from 'enzyme';
import IconLink from './index';

describe('RENDERING - Button > IconLink', () => {
  it('should render with default props', () => {
    const component = shallow(<IconLink icon="test" to="www.codechum.com" />);
    expect(component).toMatchSnapshot();
  });
});
