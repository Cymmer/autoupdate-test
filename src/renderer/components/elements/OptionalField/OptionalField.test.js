import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { findByTestAttr } from 'codechum-app-utils';
import OptionalField from './index';

describe('EVENTS - OptionalField', () => {
  it('should change icon when opened', () => {
    const component = mount(<OptionalField label="test" />);

    let iconButton = findByTestAttr(component, 'iconButton');
    expect(iconButton.prop('icon')).toEqual('add');

    act(() => {
      iconButton.simulate('click');
    });

    component.update();

    iconButton = findByTestAttr(component, 'iconButton');
    expect(iconButton.prop('icon')).toEqual('close');
  });
});
