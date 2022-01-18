import React from 'react';
import { shallow } from 'enzyme';
import Container from './index';

describe('RENDERING - Container', () => {
  it('should render with default props', () => {
    const component = shallow(<Container />);
    expect(component).toMatchSnapshot();
  });

  it('should render its children', () => {
    const component = shallow(<Container>Test</Container>);
    expect(component).toMatchSnapshot();
  });
});
