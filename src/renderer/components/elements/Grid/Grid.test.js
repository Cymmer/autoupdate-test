import React from 'react';
import { shallow } from 'enzyme';
import Grid from './index';

describe('RENDERING - Grid', () => {
  it('should render with default props', () => {
    const component = shallow(<Grid>Test</Grid>);
    expect(component).toMatchSnapshot();
  });
});
