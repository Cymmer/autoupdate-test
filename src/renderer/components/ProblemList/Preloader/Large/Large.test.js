import React from 'react';
import { shallow } from 'enzyme';
import Large from './index';

describe('RENDERING - ProblemList > Preloader > Large', () => {
  it('should render with default props', () => {
    const component = shallow(<Large />);
    expect(component).toMatchSnapshot();
  });
});
