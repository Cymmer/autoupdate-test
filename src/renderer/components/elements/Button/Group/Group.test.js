import React from 'react';
import { shallow } from 'enzyme';
import GLOBALS from 'codechum-app-globals';
import Group from './index';
import buttonTypes from '../constants/buttonTypes';

describe('RENDERING - Button > Group', () => {
  it('should render with default props', () => {
    const component = shallow(<Group buttons={[]} />);
    expect(component).toMatchSnapshot();
  });

  it('should render appropriate number of buttons', () => {
    const component = shallow(
      <Group
        buttons={[
          {
            text: 'Button 1',
            type: buttonTypes.PRIMARY.BLUE,
            kind: GLOBALS.BUTTON_KINDS.BUTTON,
            disabled: false,
            onClick: () => {},
          },
          {
            text: 'Button 2',
            type: buttonTypes.SECONDARY.GREEN,
            kind: GLOBALS.BUTTON_KINDS.SUBMIT,
            disabled: false,
            onClick: () => {},
          },
          {
            text: 'Button 3',
            type: buttonTypes.TEXT.RED,
            kind: GLOBALS.BUTTON_KINDS.RESET,
            disabled: true,
            onClick: () => {},
          },
          {
            type: buttonTypes.TEXT.RED,
            to: 'www.codechum.com',
            id: 'buttonLink1',
            icon: 'dummyIcon',
            tabIndex: 0,
            disabled: false,
            text: 'ButtonLink 1',
          },
        ]}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
