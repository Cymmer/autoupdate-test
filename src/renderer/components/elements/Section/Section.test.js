import React from 'react';
import { shallow } from 'enzyme';
import Section from './index';

describe('RENDERING - Section', () => {
  it('should render with default props', () => {
    const component = shallow(<Section />);
    expect(component).toMatchSnapshot();
  });

  it('should render its children if it has children', () => {
    const component = shallow(<Section>Test</Section>);
    expect(component).toMatchSnapshot();
  });

  it('should render a title if it has a title', () => {
    const component = shallow(<Section title="Test" />);
    expect(component).toMatchSnapshot();
  });
});
