import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './index';
import actionTypes from '../constants/actionTypes';

describe('RENDERING - ActionsDropdown > Dropdown', () => {
  it('should render with default props', () => {
    const component = shallow(<Dropdown actions={[]} isToggled={false} />);
    expect(component).toMatchSnapshot();
  });

  it('should render correct and appropriate children', () => {
    const component = shallow(
      <Dropdown
        actions={[
          {
            type: actionTypes.BUTTON,
            action: () => {},
            icon: 'test',
            text: 'Test',
            tooltip: 'Test Tooltip',
            disabled: false,
          },
          {
            type: actionTypes.BUTTON,
            action: () => {},
            icon: 'test',
            text: 'Test',
            tooltip: 'Test Tooltip',
            disabled: false,
          },
          {
            type: actionTypes.LINK,
            action: 'www.codechum.com',
            icon: 'test',
            text: 'Test',
            tooltip: 'Test Tooltip',
            disabled: false,
          },
          {
            type: actionTypes.LINK,
            action: 'www.codechum.com',
            icon: 'test',
            text: 'Test',
            tooltip: 'Test Tooltip',
            disabled: false,
          },
        ]}
        isToggled={false}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
