import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import Controlled from './index';

describe('RENDERING - RadioGroup > Controlled', () => {
  it('should render with default props', () => {
    const component = shallow(
      <Controlled
        id="test"
        label="Test"
        name="test"
        value="test"
        onChange={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render an icon if it has an icon', () => {
    const component = shallow(
      <Controlled
        icon="test"
        id="test"
        label="Test"
        name="test"
        value="test"
        onChange={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });
});

describe('EVENTS - RadioGroup > Controlled', () => {
  it('should be changeable if not disabled', () => {
    const changeFn = jest.fn();
    const component = mount(
      <Controlled
        id="test"
        label="Test"
        name="test"
        value="test"
        onChange={changeFn}
      />
    );

    const radio = findByTestAttr(component, 'radio');
    radio.simulate('change', {
      target: {
        checked: true,
      },
    });

    expect(changeFn).toHaveBeenCalled();
    expect(radio.prop('disabled')).toBe(false);
  });

  it('should not be changeable if disabled', () => {
    const changeFn = jest.fn();
    const component = mount(
      <Controlled
        disabled
        id="test"
        label="Test"
        name="test"
        value="test"
        onChange={changeFn}
      />
    );

    const radio = findByTestAttr(component, 'radio');

    // in checking for a radio if it is indeed disabled,
    // we do not simulate a change event because that
    // overrides the disabled state. Instead, we just check
    // if the disabled prop was indeed passed to the radio
    expect(radio.prop('disabled')).toBe(true);
  });
});
