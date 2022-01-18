import React from 'react';
import { shallow } from 'enzyme';
import ProblemInputList from './index';

describe('RENDERING - ProblemInputList', () => {
  it('should render its children', () => {
    const DUMMY_CHILDREN = (
      <>
        <p>Child 1</p>
        <p>Child 2</p>
        <p>Child 3</p>
      </>
    );
    const component = shallow(
      <ProblemInputList>{DUMMY_CHILDREN}</ProblemInputList>
    );
    expect(component.find('p').length).toEqual(3);
  });
});
