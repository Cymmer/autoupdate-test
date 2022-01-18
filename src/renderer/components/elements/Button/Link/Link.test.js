import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import Link from './index';

describe('RENDERING - Button > Link', () => {
  it('should render with default props', () => {
    const component = shallow(<Link to="http://www.codechum.com">Test</Link>);
    expect(component).toMatchSnapshot();
  });

  it('should render an icon', () => {
    const component = shallow(
      <Link icon="test" to="http://www.codechum.com">
        Test
      </Link>
    );

    const icon = findByTestAttr(component, 'icon');
    expect(icon.exists()).toBeTruthy();
  });

  it('should render the native link if the link is an external link', () => {
    // test first with an http link
    let component = shallow(<Link to="http://www.codechum.com">Test</Link>);

    let nativeAnchor = findByTestAttr(component, 'nativeAnchor');
    expect(nativeAnchor).toBeTruthy();

    // then test again with an https link
    component = shallow(<Link to="https://www.codechum.com">Test</Link>);
    nativeAnchor = findByTestAttr(component, 'nativeAnchor');
    expect(nativeAnchor).toBeTruthy();
  });

  it('should render the react router link if the link is an internal link', () => {
    const component = shallow(<Link to="/internal-link">Test</Link>);

    const reactRouterLink = findByTestAttr(component, 'reactRouterLink');
    expect(reactRouterLink).toBeTruthy();
  });
});
