import React from 'react';
import { shallow } from 'enzyme';
import SampleProblemList from './index';

describe('RENDERING - SampleProblemList', () => {
  it('should render with default props', () => {
    const component = shallow(
      <SampleProblemList>
        <h1>Dummy Child1</h1>
        <p>Dummy Child2</p>
      </SampleProblemList>
    );
    expect(component).toMatchSnapshot();
  });
});
