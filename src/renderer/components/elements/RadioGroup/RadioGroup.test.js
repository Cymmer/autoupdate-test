import React from 'react';
import { shallow } from 'enzyme';
import RadioGroup from './index';

describe('RENDERING - RadioGroup', () => {
  it('should render with default props', () => {
    const component = shallow(<RadioGroup options={[]} />);
    expect(component).toMatchSnapshot();
  });

  it('should render a label if it has a label', () => {
    const component = shallow(<RadioGroup label="Test" options={[]} />);
    expect(component).toMatchSnapshot();
  });

  it('should render the appropriate number of options', () => {
    const component = shallow(
      <RadioGroup
        label="Test"
        options={[
          {
            id: 'test1',
            value: 'test1',
            label: 'Test 1',
            name: 'testName',
            onChange: () => {},
            icon: 'test1',
          },
          {
            id: 'test2',
            value: 'test2',
            label: 'Test 2',
            name: 'testName',
            onChange: () => {},
            icon: 'test2',
          },
        ]}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render an error if it has an error', () => {
    const component = shallow(<RadioGroup error="Test" options={[]} />);
    expect(component).toMatchSnapshot();
  });
});
