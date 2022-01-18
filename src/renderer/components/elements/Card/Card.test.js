import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import Card from './index';

describe('RENDERING - Card', () => {
  it('should render with default props', () => {
    const component = shallow(<Card />);
    expect(component).toMatchSnapshot();
  });

  it('should render its children', () => {
    const component = shallow(<Card>Test</Card>);
    expect(component).toMatchSnapshot();
  });
});

describe('EVENTS - Button', () => {
  it('should be clickable if it has an onClick handler', () => {
    const clickFn = jest.fn();
    const component = mount(<Card onClick={clickFn} />);

    findByTestAttr(component, 'card').simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });

  it('should be clickable via ENTER key if it has an onClick handler', () => {
    const clickFn = jest.fn();
    const component = mount(<Card onClick={clickFn} />);

    findByTestAttr(component, 'card').simulate('keypress', { key: 'Enter' });

    expect(clickFn).toHaveBeenCalled();
  });

  it('should be clickable via SPACE key if it has an onClick handler', () => {
    const clickFn = jest.fn();
    const component = mount(<Card onClick={clickFn} />);

    findByTestAttr(component, 'card').simulate('keypress', { key: ' ' });

    expect(clickFn).toHaveBeenCalled();
  });
});
