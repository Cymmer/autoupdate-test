import React from 'react';
import { shallow } from 'enzyme';
import SyntaxCard from './index';
import { programmingLanguages } from '../../../elements/constants';

describe('RENDERING - GlossaryList > GlossaryCards > SyntaxCard', () => {
  it('should render with default props', () => {
    const component = shallow(<SyntaxCard codes={[]} title="Dummy Title" />);
    expect(component).toMatchSnapshot();
  });

  it('should render all the codes depending on the programming language passed', () => {
    let component = shallow(
      <SyntaxCard
        codes={['Code1', 'Code2']}
        language={programmingLanguages.PYTHON}
        title="Dummy Title"
      />
    );
    expect(component).toMatchSnapshot();

    component = shallow(
      <SyntaxCard
        codes={['Code1', 'Code2']}
        language={programmingLanguages.C}
        title="Dummy Title"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
