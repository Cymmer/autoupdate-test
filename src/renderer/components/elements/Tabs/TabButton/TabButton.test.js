import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import TabButton from './index';

describe('RENDERING - Tabs > TabButton', () => {
  it('should render with default props', () => {
    const component = shallow(<TabButton onClick={() => {}}>Test</TabButton>);
    expect(component).toMatchSnapshot();
  });

  it('should render the close button if there is a close action and is active', () => {
    const component = shallow(
      <TabButton active closeAction={() => {}} onClick={() => {}}>
        Test
      </TabButton>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('EVENTS - Tabs > TabButton', () => {
  it('should be clickable', () => {
    const clickFn = jest.fn();
    const component = shallow(<TabButton onClick={clickFn}>Test</TabButton>);

    findByTestAttr(component, 'tabButton').simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });

  it('should have a clickable close button if it has a close button', () => {
    const clickFn = jest.fn();
    const component = shallow(
      <TabButton active closeAction={clickFn} onClick={() => {}}>
        Test
      </TabButton>
    );

    findByTestAttr(component, 'closeButton').simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });
});
