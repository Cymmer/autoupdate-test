import React from 'react';
import { shallow } from 'enzyme';
import Tabs from './index';
import tabTypes from './constants/tabTypes';
import tabKinds from './constants/tabKinds';

describe('RENDERING - Tabs', () => {
  it('should render with default props', () => {
    const component = shallow(<Tabs tabs={[]} type={tabTypes.HORIZONTAL.LG} />);
    expect(component).toMatchSnapshot();
  });

  it('should render the loading state if it is loading', () => {
    const component = shallow(
      <Tabs isLoading tabs={[]} type={tabTypes.HORIZONTAL.LG} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render its children appropriately if it is not loading', () => {
    const component = shallow(
      <Tabs
        tabs={[
          {
            name: 'Test 1',
            value: 'test1',
            kind: tabKinds.BUTTON,
            action: () => {},
            closeAction: () => {},
          },
          {
            name: 'Test 2',
            value: 'test2',
            kind: tabKinds.BUTTON,
            action: () => {},
          },
          {
            name: 'Test 3',
            value: 'test3',
            kind: tabKinds.LINK,
            action: 'www.codechum.com',
          },
          {
            name: 'Test 4',
            value: 'test4',
            kind: tabKinds.LINK,
            action: 'www.codechum.com/privacy-policy',
          },
          {
            name: 'Test 5',
            value: 'test5',
            kind: tabKinds.LINK,
            action: () => {},
            isLocked: true,
          },
        ]}
        type={tabTypes.HORIZONTAL.LG}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
