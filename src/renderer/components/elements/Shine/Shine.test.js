import React from 'react';
import { shallow } from 'enzyme';
import Shine from './index';

describe('RENDERING - Shine', () => {
  it('should render with default props', () => {
    const component = shallow(<Shine />);
    expect(component).toMatchSnapshot();
  });
});
