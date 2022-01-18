import React from 'react';
import { shallow } from 'enzyme';
import Badge from './index';

describe('RENDERING - Badge', () => {
  it('should render with default props', () => {
    const component = shallow(<Badge />);
    expect(component).toMatchSnapshot();
  });

  it('should render with icon', () => {
    const component = shallow(<Badge icon="icon" />);
    expect(component).toMatchSnapshot();
  });
});
