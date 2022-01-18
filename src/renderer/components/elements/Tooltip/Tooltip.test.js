import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from './index';
import tooltipPlacement from './constants/tooltipPlacement';

describe('RENDERING - Tooltip', () => {
  it('should render with default props', () => {
    const component = shallow(
      <Tooltip content="Test">
        <p>Test</p>
      </Tooltip>
    );
    expect(component).toMatchSnapshot();
  });

  it('should set its placement appropriately', () => {
    let component = shallow(
      <Tooltip content="Test" placement={tooltipPlacement.BOTTOM}>
        <p>Test</p>
      </Tooltip>
    );
    expect(component).toMatchSnapshot();

    component = shallow(
      <Tooltip content="Test" placement={tooltipPlacement.LEFT}>
        <p>Test</p>
      </Tooltip>
    );
    expect(component).toMatchSnapshot();

    component = shallow(
      <Tooltip content="Test" placement={tooltipPlacement.RIGHT}>
        <p>Test</p>
      </Tooltip>
    );
    expect(component).toMatchSnapshot();
  });
});
