import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import Button from './index';

describe('RENDERING - ActionsDropdown > Action > Button', () => {
  it('should render with default props', () => {
    const component = shallow(
      <Button
        action={{
          action: () => {},
          icon: 'icon',
          text: 'Test',
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render without tooltip', () => {
    const component = shallow(
      <Button
        action={{
          action: () => {},
          icon: 'icon',
          text: 'Test',
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render with tooltip', () => {
    const component = shallow(
      <Button
        action={{
          action: () => {},
          icon: 'icon',
          text: 'Test',
          tooltip: 'Test Tooltip',
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});

describe('EVENTS - ActionsDropdown > Action > Button', () => {
  it('should be clickable if not disabled (without tooltip)', () => {
    const clickFn = jest.fn();
    const component = mount(
      <Button
        action={{
          action: clickFn,
          icon: 'icon',
          text: 'Test',
        }}
      />
    );

    findByTestAttr(component, 'button').simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });

  it('should be clickable if not disabled (with tooltip)', () => {
    const clickFn = jest.fn();
    const component = mount(
      <Button
        action={{
          action: clickFn,
          icon: 'icon',
          text: 'Test',
          tooltip: 'Test Tooltip',
        }}
      />
    );

    findByTestAttr(component, 'button').simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });

  it('should not be clickable if disabled (without tooltip)', () => {
    const clickFn = jest.fn();
    const component = mount(
      <Button
        action={{
          action: clickFn,
          icon: 'icon',
          text: 'Test',
          disabled: true,
        }}
      />
    );

    findByTestAttr(component, 'button').simulate('click');

    expect(clickFn).not.toHaveBeenCalled();
  });

  it('should not be clickable if disabled (with tooltip)', () => {
    const clickFn = jest.fn();
    const component = mount(
      <Button
        action={{
          action: clickFn,
          icon: 'icon',
          text: 'Test',
          tooltip: 'Test Tooltip',
          disabled: true,
        }}
      />
    );

    findByTestAttr(component, 'button').simulate('click');

    expect(clickFn).not.toHaveBeenCalled();
  });
});
