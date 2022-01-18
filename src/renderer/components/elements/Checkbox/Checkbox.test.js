import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import Checkbox from './index';

describe('RENDERING - Checkbox', () => {
  it('should render with default props', () => {
    const component = shallow(
      <Checkbox label="Test" name="test" onChange={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });
});

describe('EVENTS - Button', () => {
  it('should be changeable if not disabled', () => {
    const changeFn = jest.fn();
    const component = mount(
      <Checkbox label="Test" name="test" onChange={changeFn} />
    );

    const checkbox = findByTestAttr(component, 'checkbox');
    checkbox.simulate('change', {
      target: {
        checked: true,
      },
    });

    expect(changeFn).toHaveBeenCalled();
    expect(checkbox.prop('disabled')).toBe(false);
  });

  it('should not be changeable if disabled', () => {
    const changeFn = jest.fn();
    const component = mount(
      <Checkbox disabled label="Test" name="test" onChange={changeFn} />
    );

    const checkbox = findByTestAttr(component, 'checkbox');

    // in checking for a checkbox if it is indeed disabled,
    // we do not simulate a change event because that
    // overrides the disabled state. Instead, we just check
    // if the disabled prop was indeed passed to the checkbox
    expect(checkbox.prop('disabled')).toBe(true);
  });
});
