import React from 'react';
import { shallow } from 'enzyme';
import InfoCard from './index';

describe('RENDERING - InfoList > InfoCard', () => {
  it('should render with default props', () => {
    const component = shallow(
      <InfoCard info="Dummy Info" title="Dummy Title" />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render all the syntaxes if there is/are', () => {
    const component = shallow(
      <InfoCard
        info="Dummy Info"
        syntax={['syntax1', 'syntax2']}
        title="Dummy Title"
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the actual sample code if there is', () => {
    const component = shallow(
      <InfoCard
        code="Dummy Source Code"
        info="Dummy Info"
        title="Dummy Title"
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the output of the sample code if there is a sample code', () => {
    // test first by passing an `output` without a `code`
    let component = shallow(
      <InfoCard info="Dummy Info" output="Dummy Output" title="Dummy Title" />
    );
    expect(component).toMatchSnapshot();

    // then test again by actually passing a `code`
    component = shallow(
      <InfoCard
        code="Dummy Source Code"
        info="Dummy Info"
        output="Dummy Output"
        title="Dummy Title"
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the additional information if there is an additional information', () => {
    const component = shallow(
      <InfoCard
        additionalInfo="Dummy Additional Info"
        info="Dummy Info"
        title="Dummy Title"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
