import React from 'react';
import { shallow } from 'enzyme';
import LatestExecutionList from './index';

describe('RENDERING - LatestExecutionList', () => {
  it('should render with default props', () => {
    const component = shallow(
      <LatestExecutionList>
        <h1>Dummy Child1</h1>
        <p>Dummy Child2</p>
      </LatestExecutionList>
    );
    expect(component).toMatchSnapshot();
  });
});
