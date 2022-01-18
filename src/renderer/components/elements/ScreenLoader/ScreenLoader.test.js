import React from 'react';
import { shallow } from 'enzyme';
import ScreenLoader from './index';

describe('RENDERING - ScreenLoader', () => {
  it('should render with default props', () => {
    const component = shallow(<ScreenLoader />);
    expect(component).toMatchSnapshot();
  });
});
