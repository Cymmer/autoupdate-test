import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import Controlled from './index';
import inputTypes from '../constants/inputTypes';

describe('RENDERING - Input > Controlled', () => {
  it('should render with default props', () => {
    const component = shallow(<Controlled name="test" onChange={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  it('should render a label if it has a label and the type is SLIM', () => {
    const component = shallow(
      <Controlled
        label="Test Label"
        name="test"
        type={inputTypes.SLIM}
        onChange={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should not render a label if it has a label and the type is not SLIM', () => {
    const component = shallow(
      <Controlled
        label="Test Label"
        name="test"
        type={inputTypes.FORM}
        onChange={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render a placeholder if it has a placeholder and the type is FORM', () => {
    const component = shallow(
      <Controlled
        name="test"
        placeholder="Test Label"
        type={inputTypes.FORM}
        onChange={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should not render a placeholder if it has a placeholder and the type is not FORM', () => {
    const component = shallow(
      <Controlled
        name="test"
        placeholder="Test Label"
        type={inputTypes.SLIM}
        onChange={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render an icon if it has an icon', () => {
    const component = shallow(
      <Controlled icon="test" name="test" onChange={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the helper text if it has a helper text', () => {
    const component = shallow(
      <Controlled helperText="Test" name="test" onChange={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the error message if it has an error message', () => {
    const component = shallow(
      <Controlled error="Test" name="test" onChange={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the success message if it has an success message', () => {
    const component = shallow(
      <Controlled name="test" success="Test" onChange={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });
});

describe('EVENTS - Input > Controlled', () => {
  it('should be changeable if not disabled', () => {
    const changeFn = jest.fn();
    const component = mount(<Controlled name="test" onChange={changeFn} />);

    const input = findByTestAttr(component, 'input');
    input.simulate('change', {
      target: {
        value: 'New Value',
      },
    });

    expect(changeFn).toHaveBeenCalled();
  });

  it('should not be changeable if disabled', () => {
    const changeFn = jest.fn();
    const component = mount(
      <Controlled disabled name="test" onChange={changeFn} />
    );

    const input = findByTestAttr(component, 'input');

    // in checking for an input if it is indeed disabled,
    // we do not simulate a change event because that
    // overrides the disabled state. Instead, we just check
    // if the disabled prop was indeed passed to the input
    expect(input.prop('disabled')).toBe(true);
  });
});
