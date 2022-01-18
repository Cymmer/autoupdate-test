import React from 'react';
import { shallow } from 'enzyme';
import GLOBALS from 'codechum-app-globals';
import Text from './index';
import textTypes from './constants/textTypes';

describe('RENDERING - Text', () => {
  it('should render with default props', () => {
    const component = shallow(<Text />);
    expect(component).toMatchSnapshot();
  });

  it('should render its children', () => {
    const component = shallow(<Text>Test</Text>);
    expect(component).toMatchSnapshot();
  });

  it('should set its passed colorClass in its classname', () => {
    let component = shallow(
      <Text colorClass={GLOBALS.COLOR_CLASSES.BLUE['100']}>Test</Text>
    );
    expect(component).toMatchSnapshot();

    component = shallow(
      <Text colorClass={GLOBALS.COLOR_CLASSES.RED['500']}>Test</Text>
    );
    expect(component).toMatchSnapshot();
  });

  it('should set its passed type in its classname', () => {
    let component = shallow(<Text type={textTypes.HEADING.XXL}>Test</Text>);
    expect(component).toMatchSnapshot();

    component = shallow(<Text type={textTypes.BODY.LG}>Test</Text>);
    expect(component).toMatchSnapshot();
  });

  it('should have the correct element type', () => {
    let component = shallow(<Text type={textTypes.HEADING.XXL}>Test</Text>);
    expect(component.type()).toEqual('h1');
    component = shallow(<Text type={textTypes.HEADING.XL}>Test</Text>);
    expect(component.type()).toEqual('h1');
    component = shallow(<Text type={textTypes.HEADING.LG}>Test</Text>);
    expect(component.type()).toEqual('h1');

    component = shallow(<Text type={textTypes.HEADING.MD}>Test</Text>);
    expect(component.type()).toEqual('h2');

    component = shallow(<Text type={textTypes.HEADING.SM}>Test</Text>);
    expect(component.type()).toEqual('h3');

    component = shallow(<Text type={textTypes.HEADING.XS}>Test</Text>);
    expect(component.type()).toEqual('h4');

    component = shallow(<Text type={textTypes.HEADING.XXS}>Test</Text>);
    expect(component.type()).toEqual('h5');

    component = shallow(<Text type={textTypes.HEADING.XXXS}>Test</Text>);
    expect(component.type()).toEqual('h6');

    component = shallow(<Text type={textTypes.CODE.MD}>Test</Text>);
    expect(component.type()).toEqual('pre');
    component = shallow(<Text type={textTypes.CODE.SM}>Test</Text>);
    expect(component.type()).toEqual('pre');

    component = shallow(<Text>Test</Text>);
    expect(component.type()).toEqual('p');
  });
});
