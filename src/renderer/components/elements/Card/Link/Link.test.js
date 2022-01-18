import React from 'react';
import { shallow } from 'enzyme';
import Link from './index';

describe('RENDERING - Card > Link', () => {
  it('should render with default props', () => {
    const component = shallow(<Link>Test</Link>);
    expect(component).toMatchSnapshot();
  });
});
