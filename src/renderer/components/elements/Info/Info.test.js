import React from 'react';
import { shallow } from 'enzyme';
import Info from './index';

describe('RENDERING - Info', () => {
  it('should render with default props', () => {
    const component = shallow(
      <Info label="Test">
        <p>Test</p>
      </Info>
    );
    expect(component).toMatchSnapshot();
  });
});
