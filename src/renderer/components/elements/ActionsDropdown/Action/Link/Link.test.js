import React from 'react';
import { shallow } from 'enzyme';
import Link from './index';

describe('RENDERING - ActionsDropdown > Action > Link', () => {
  it('should render with default props', () => {
    const component = shallow(
      <Link
        action={{
          action: 'www.codechum.com',
          icon: 'icon',
          text: 'Test',
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render without tooltip', () => {
    const component = shallow(
      <Link
        action={{
          action: 'www.codechum.com',
          icon: 'icon',
          text: 'Test',
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render with tooltip', () => {
    const component = shallow(
      <Link
        action={{
          action: 'www.codechum.com',
          icon: 'icon',
          text: 'Test',
          tooltip: 'Test Tooltip',
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
