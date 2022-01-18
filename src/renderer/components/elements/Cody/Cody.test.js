import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import Cody from './index';

import CodyOkay from '../../../static/images/Cody/okay.svg';
import CodyPerfect from '../../../static/images/Cody/perfect.svg';
import CodyError from '../../../static/images/Cody/error.svg';
import CodyCorrect from '../../../static/images/Cody/correct-flipped.svg';
import CodyThinking from '../../../static/images/Cody/thinking.svg';
import CodyWelcome from '../../../static/images/Cody/welcome.svg';
import CodyFail from '../../../static/images/Cody/fail.svg';

describe('RENDERING - Cody', () => {
  it('should render with default props', () => {
    const component = shallow(<Cody />);
    expect(component).toMatchSnapshot();
  });

  it('should have the correct image source depending on the type', () => {
    let component = shallow(<Cody type={GLOBALS.CODY_TYPES.WELCOME} />);
    let image = findByTestAttr(component, 'image');
    expect(image.prop('src')).toBe(CodyWelcome);

    component = shallow(<Cody type={GLOBALS.CODY_TYPES.ERROR} />);
    image = findByTestAttr(component, 'image');
    expect(image.prop('src')).toBe(CodyError);

    component = shallow(<Cody type={GLOBALS.CODY_TYPES.OK} />);
    image = findByTestAttr(component, 'image');
    expect(image.prop('src')).toBe(CodyOkay);

    component = shallow(<Cody type={GLOBALS.CODY_TYPES.PERFECT} />);
    image = findByTestAttr(component, 'image');
    expect(image.prop('src')).toBe(CodyPerfect);

    component = shallow(<Cody type={GLOBALS.CODY_TYPES.CORRECT} />);
    image = findByTestAttr(component, 'image');
    expect(image.prop('src')).toBe(CodyCorrect);

    component = shallow(<Cody type={GLOBALS.CODY_TYPES.THINKING} />);
    image = findByTestAttr(component, 'image');
    expect(image.prop('src')).toBe(CodyThinking);

    component = shallow(<Cody type={GLOBALS.CODY_TYPES.FAIL} />);
    image = findByTestAttr(component, 'image');
    expect(image.prop('src')).toBe(CodyFail);
  });

  it('should have the correct image source if it has an override src', () => {
    const imageSrc = 'https://codechum.com/static/img/logo-tagline.svg';
    const component = shallow(<Cody src={imageSrc} />);
    const image = findByTestAttr(component, 'image');

    expect(image.prop('src')).toBe(imageSrc);
  });
});
