import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import Anchor from './index';

describe('RENDERING - Anchor', () => {
  it('should render with default props', () => {
    const component = shallow(<Anchor href="#">Test</Anchor>);
    expect(component).toMatchSnapshot();
  });

  it('should pass the correct href value', () => {
    const LINK = 'www.codechum.com';

    const component = shallow(<Anchor href={LINK}>Test</Anchor>);
    const anchor = findByTestAttr(component, 'anchor');

    expect(anchor.prop('href')).toEqual(LINK);
  });

  it('should pass the correct target value', () => {
    const LINK = 'www.codechum.com';

    // test if will not open new tab first
    let component = shallow(
      <Anchor href={LINK} willOpenNewTab={false}>
        Test
      </Anchor>
    );
    let anchor = findByTestAttr(component, 'anchor');
    expect(anchor.prop('target')).toEqual('_self');

    // then test if will open new tab
    component = shallow(
      <Anchor willOpenNewTab href={LINK}>
        Test
      </Anchor>
    );
    anchor = findByTestAttr(component, 'anchor');
    expect(anchor.prop('target')).toEqual('_blank');
  });
});
