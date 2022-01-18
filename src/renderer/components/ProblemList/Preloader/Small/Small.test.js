import React from 'react';
import { shallow } from 'enzyme';
import Small from './index';

describe('RENDERING - ProblemList > Preloader > Small', () => {
  it('should render with default props', () => {
    const component = shallow(<Small />);
    expect(component).toMatchSnapshot();
  });
});
