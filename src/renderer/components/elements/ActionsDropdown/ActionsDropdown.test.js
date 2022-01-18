import React from 'react';
import { shallow } from 'enzyme';
import ActionsDropdown from './index';
import actionTypes from './constants/actionTypes';

describe('RENDERING - ActionsDropdown', () => {
  it('should render with default props (empty actions)', () => {
    const component = shallow(<ActionsDropdown actions={[]} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with actions', () => {
    const component = shallow(
      <ActionsDropdown
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
