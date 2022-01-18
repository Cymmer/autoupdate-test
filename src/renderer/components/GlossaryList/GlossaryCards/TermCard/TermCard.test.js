import React from 'react';
import { shallow } from 'enzyme';
import TermCard from './index';

describe('RENDERING - GlossaryList > GlossaryCards > TermCard', () => {
  it('should render with default props', () => {
    const component = shallow(
      <TermCard description="Dummy Description" title="Dummy Title" />
    );
    expect(component).toMatchSnapshot();
  });
});
