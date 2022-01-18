import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { StudentNavbar } from './index';

import Logo from '../../../static/images/Logo/icon-dark.svg';

const USER = {
  has_premium_university: false,
};

describe('RENDERING - Student > Navbar', () => {
  it('should have pass the correct values to the Navbar for localhost', () => {
    delete window.location;
    window.location = {
      host: 'localhost:3000',
    };
    const component = shallow(
      <StudentNavbar
        isNightMode={false}
        uiSettingsUpdate={() => {}}
        user={USER}
      />
    );

    const logo = findByTestAttr(component, 'logo');
    expect(logo.prop('src')).toEqual(Logo);
  });

  it('should have pass the correct values to the Navbar for app', () => {
    delete window.location;
    window.location = {
      host: 'app.codechum.com',
    };
    const component = shallow(
      <StudentNavbar
        isNightMode={false}
        uiSettingsUpdate={() => {}}
        user={USER}
      />
    );

    const logo = findByTestAttr(component, 'logo');
    expect(logo.prop('src')).toEqual(Logo);
  });

  it('should have pass the correct values to the Navbar for staging', () => {
    delete window.location;
    window.location = {
      host: 'staging.codechum.com',
    };
    const component = shallow(
      <StudentNavbar
        isNightMode={false}
        uiSettingsUpdate={() => {}}
        user={USER}
      />
    );

    const logo = findByTestAttr(component, 'logo');
    expect(logo.prop('src')).toEqual(Logo);
  });

  it('should have pass the correct values to the Navbar for beta', () => {
    delete window.location;
    window.location = {
      host: 'beta.codechum.com',
    };
    const component = shallow(
      <StudentNavbar
        isNightMode={false}
        uiSettingsUpdate={() => {}}
        user={USER}
      />
    );

    const logo = findByTestAttr(component, 'logo');
    expect(logo.prop('src')).toEqual(Logo);
  });

  it('should have pass the correct values to the Navbar for MCL', () => {
    delete window.location;
    window.location = {
      host: 'mcl.codechum.com',
    };
    const component = shallow(
      <StudentNavbar
        isNightMode={false}
        uiSettingsUpdate={() => {}}
        user={USER}
      />
    );

    const logo = findByTestAttr(component, 'logo');
    expect(logo.prop('src')).toEqual(GLOBALS.UNIVERSITIES.MCL.LOGO.SMALL);
  });
});
