import GLOBALS from 'codechum-app-globals';
import { findByTestAttr } from 'codechum-app-utils';
import { shallow } from 'enzyme';
import React from 'react';
import VerticalLogo from '../../../static/images/Logo/vertical.svg';
import Watermark from '../../../static/images/Logo/watermark.svg';
import Sidebar from './index';
import styles from './styles.module.scss';

describe('RENDERING - LoginSignup > Sidebar', () => {
  it('should render the passed watermark prop', () => {
    let component = shallow(<Sidebar watermark={Watermark} />);
    let watermark = findByTestAttr(component, 'watermark');
    expect(watermark.prop('src')).toEqual(Watermark);

    // testing with another image passed
    component = shallow(<Sidebar watermark={VerticalLogo} />);
    watermark = findByTestAttr(component, 'watermark');
    expect(watermark.prop('src')).toEqual(VerticalLogo);
  });

  it('should render the correct class based on the color prop', () => {
    // testing with another image passed
    const component = shallow(
      <Sidebar color={GLOBALS.COLOR_THEMES.DEFAULT} watermark={Watermark} />
    );
    const sidebarSection = findByTestAttr(component, 'sidebarSection');
    expect(sidebarSection.prop('className')).toEqual(styles.Sidebar___default);
  });
});
