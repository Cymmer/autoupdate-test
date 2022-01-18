import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import InfoBars from './index';

describe('RENDERING - InfoBars', () => {
  it('should render a locked icon if locked', () => {
    const component = shallow(
      <InfoBars
        isLocked
        colorHexCode={GLOBALS.COLOR_HEX_CODES.BLUE['300']}
        label="Dummy Label"
        text="Dummy Text"
        value={50}
      />
    );

    const lockedIcon = findByTestAttr(component, 'lockedIcon');
    expect(lockedIcon.exists()).toEqual(true);
  });

  it('should not render a locked icon if not locked', () => {
    const component = shallow(
      <InfoBars
        colorHexCode={GLOBALS.COLOR_HEX_CODES.BLUE['300']}
        isLocked={false}
        label="Dummy Label"
        text="Dummy Text"
        value={50}
      />
    );

    const lockedIcon = findByTestAttr(component, 'lockedIcon');
    expect(lockedIcon.exists()).toEqual(false);
  });
});
