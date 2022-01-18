import React from 'react';
import { shallow } from 'enzyme';
import Data from './index';

describe('RENDERING - Data', () => {
  it('should render with default props', () => {
    const component = shallow(<Data label="Test">15/15</Data>);
    expect(component).toMatchSnapshot();
  });
});
