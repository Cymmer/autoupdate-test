import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import Notification from './index';

describe('RENDERING - NotificationsDropdown > Notification', () => {
  it('should render with default props', () => {
    const component = shallow(<Notification />);
    expect(component).toMatchSnapshot();
  });

  it('should be clickable', () => {
    const clickFn = jest.fn();
    const component = shallow(<Notification viewAction={clickFn} />);

    findByTestAttr(component, 'notificationButton').simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });
});
