import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import IconButton from './index';

describe('RENDERING - Button > IconButton', () => {
  it('should render with default props', () => {
    const component = shallow(<IconButton icon="test" />);
    expect(component).toMatchSnapshot();
  });
});

describe('EVENTS - Button > IconButton', () => {
  it('should be clickable if not disabled', () => {
    const clickFn = jest.fn();
    const component = mount(
      <IconButton disabled={false} icon="test" onClick={clickFn} />
    );

    findByTestAttr(component, 'button').simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });

  it('should not be clickable if disabled', () => {
    const clickFn = jest.fn();
    const component = mount(
      <IconButton disabled icon="test" onClick={clickFn} />
    );

    findByTestAttr(component, 'button').simulate('click');

    expect(clickFn).not.toHaveBeenCalled();
  });

  it('should be clickable if not locked and not disabled', () => {
    const clickFn = jest.fn();
    const component = mount(
      <IconButton
        disabled={false}
        icon="test"
        isLocked={false}
        onClick={clickFn}
      />
    );

    findByTestAttr(component, 'button').simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });

  it('should not be clickable if locked', () => {
    const clickFn = jest.fn();
    const component = mount(
      <IconButton isLocked icon="test" onClick={clickFn} />
    );

    findByTestAttr(component, 'button').simulate('click');

    expect(clickFn).not.toHaveBeenCalled();
  });
});
