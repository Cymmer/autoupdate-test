import React from 'react';
import { shallow } from 'enzyme';
import SampleProblemCard from './index';

describe('RENDERING - SampleProblemList > SampleProblemCard', () => {
  it('should render with default props', () => {
    const component = shallow(
      <SampleProblemCard number={1} title="Dummy Title">
        <h1>Dummy Child1</h1>
        <p>Dummy Child2</p>
      </SampleProblemCard>
    );
    expect(component).toMatchSnapshot();
  });
});
