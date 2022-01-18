import React from 'react';
import { shallow } from 'enzyme';
import GLOBALS from 'codechum-app-globals';
import Span from './index';
import textTypes from '../constants/textTypes';

describe('RENDERING - Text > Span', () => {
  it('should render with default props', () => {
    const component = shallow(<Span />);
    expect(component).toMatchSnapshot();
  });

  it('should render its children', () => {
    const component = shallow(<Span>Test</Span>);
    expect(component).toMatchSnapshot();
  });

  it('should set its passed colorClass in its classname', () => {
    let component = shallow(
      <Span colorClass={GLOBALS.COLOR_CLASSES.BLUE['100']}>Test</Span>
    );
    expect(component).toMatchSnapshot();

    component = shallow(
      <Span colorClass={GLOBALS.COLOR_CLASSES.RED['500']}>Test</Span>
    );
    expect(component).toMatchSnapshot();
  });

  it('should set its passed type in its classname', () => {
    let component = shallow(<Span type={textTypes.HEADING.XXL}>Test</Span>);
    expect(component).toMatchSnapshot();

    component = shallow(<Span type={textTypes.BODY.LG}>Test</Span>);
    expect(component).toMatchSnapshot();
  });
});
