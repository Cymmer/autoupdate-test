import React from 'react';
import { shallow } from 'enzyme';
import Separator from './index';

describe('RENDERING - Separator', () => {
  it('should render with default props', () => {
    const component = shallow(<Separator />);
    expect(component).toMatchSnapshot();
  });
});
