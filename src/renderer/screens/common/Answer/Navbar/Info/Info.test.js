import React from 'react';
import { shallow } from 'enzyme';
import GLOBALS from 'codechum-app-globals';
import Info from './index';

describe('RENDERING - Answer > Navbar > Info', () => {
  it('should render with default props', () => {
    const component = shallow(
      <Info
        colorClass={GLOBALS.COLOR_CLASSES.RED['300']}
        label="Dummy Label"
        value="Dummy Value"
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the lock state if locked', () => {
    const component = shallow(
      <Info
        isLocked
        colorClass={GLOBALS.COLOR_CLASSES.RED['300']}
        label="Dummy Label"
        value="Dummy Value"
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the unlocked state if locked', () => {
    const component = shallow(
      <Info
        colorClass={GLOBALS.COLOR_CLASSES.RED['300']}
        isLocked={false}
        label="Dummy Label"
        value="Dummy Value"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
