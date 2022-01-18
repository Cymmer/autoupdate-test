import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import TabLink from './index';

describe('RENDERING - Tabs > TabLink', () => {
  it('should render with default props', () => {
    const component = shallow(<TabLink>Test</TabLink>);
    expect(component).toMatchSnapshot();
  });

  it('should render the close button if there is a close action and is active', () => {
    const component = shallow(
      <TabLink active closeAction={() => {}}>
        Test
      </TabLink>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the locked state if locked', () => {
    const component = shallow(
      <TabLink active isLocked closeAction={() => {}}>
        Test
      </TabLink>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the unlocked state if locked', () => {
    const component = shallow(
      <TabLink active closeAction={() => {}} isLocked={false}>
        Test
      </TabLink>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('EVENTS - Tabs > TabButton', () => {
  it('should have a clickable Link with the correct url', () => {
    const url = 'www.codechum.com';
    const component = shallow(<TabLink to={url}>Test</TabLink>);

    // in testing if the link is clickable, we just check if
    // the correct url was passed to it since this is a 3rd
    // party component
    expect(findByTestAttr(component, 'tabLink').prop('to')).toBe(url);
  });

  it('should have a clickable close button if it has a close button', () => {
    const clickFn = jest.fn();
    const component = shallow(
      <TabLink active closeAction={clickFn}>
        Test
      </TabLink>
    );

    findByTestAttr(component, 'closeButton').simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });
});
