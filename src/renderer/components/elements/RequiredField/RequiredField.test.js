import React from 'react';
import { shallow } from 'enzyme';
import RequiredField from './index';

describe('RENDERING - RequiredField', () => {
  it('should render with default props', () => {
    const component = shallow(<RequiredField />);
    expect(component).toMatchSnapshot();
  });

  it('should render the placeholder', () => {
    const component = shallow(<RequiredField placeholder="Test" />);
    expect(component).toMatchSnapshot();
  });
});
