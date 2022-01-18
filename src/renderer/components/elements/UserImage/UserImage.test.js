import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import UserImage from './index';

import Placeholder from '../../../static/images/placeholder.svg';

describe('RENDERING - UserImage', () => {
  it('should render with default props', () => {
    const component = shallow(<UserImage />);
    expect(component).toMatchSnapshot();
  });

  it('should render the image correctly', () => {
    let component = shallow(<UserImage />);
    expect(findByTestAttr(component, 'image').prop('src')).toBe(Placeholder);

    const overrideImage = 'test.png';
    component = shallow(<UserImage image={overrideImage} />);
    expect(findByTestAttr(component, 'image').prop('src')).toBe(overrideImage);
  });
});
