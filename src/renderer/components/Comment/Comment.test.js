import React from 'react';
import { shallow } from 'enzyme';
import Comment from './index';

const COMPONENT_PROPS = {
  time: '10 hours ago',
  user: {
    first_name: 'Male',
    last_name: 'Teacher',
    profile_pic: 'http://example.com',
  },
  content: 'Good job',
};

describe('RENDERING - Comment', () => {
  it('should render', () => {
    const component = shallow(<Comment {...COMPONENT_PROPS} />);
    expect(component).toMatchSnapshot();
  });
});
