import React from 'react';
import { shallow } from 'enzyme';
import GlossaryList from './index';

describe('RENDERING - GlossaryList', () => {
  it('should render with default props', () => {
    const component = shallow(
      <GlossaryList title="Dummy Title">
        <p>Dummy Child1</p>
        <p>Dummy Child2</p>
      </GlossaryList>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the notes if it has some notes', () => {
    const component = shallow(
      <GlossaryList
        notes={['Dummy Notes1', 'Dummy Notes2']}
        title="Dummy Title"
      >
        <p>Dummy Child1</p>
        <p>Dummy Child2</p>
      </GlossaryList>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the description if it has some description', () => {
    const component = shallow(
      <GlossaryList
        description="This is a dummmy description"
        notes={['Dummy Notes1', 'Dummy Notes2']}
        title="Dummy Title"
      >
        <p>Dummy Child1</p>
        <p>Dummy Child2</p>
      </GlossaryList>
    );
    expect(component).toMatchSnapshot();
  });
});
