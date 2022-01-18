import React from 'react';
import { shallow } from 'enzyme';
import NotificationsDropdown from './index';

describe('RENDERING - NotificationsDropdown', () => {
  it('should render with default props', () => {
    const component = shallow(<NotificationsDropdown />);
    expect(component).toMatchSnapshot();
  });
});
