import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import tabKinds from '../Tabs/constants/tabKinds';

describe('RENDERING - Header', () => {
  it('should render with default props', () => {
    const component = shallow(
      <Header>
        <p>Test</p>
      </Header>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the breadcrumbs if it has breadcrumbs', () => {
    const component = shallow(
      <Header
        breadcrumbs={[
          {
            name: 'Link 1',
            link: 'https://www.codechum.com/link-1',
          },
          {
            name: 'Link 2',
            link: 'https://www.codechum.com/link-2',
          },
        ]}
      >
        <p>Test</p>
      </Header>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the tabs if it has tabs', () => {
    const component = shallow(
      <Header
        tabs={[
          {
            name: 'Tab 1',
            value: 'tab-1',
            kind: tabKinds.BUTTON,
            action: () => {},
          },
          {
            name: 'Tab 2',
            value: 'tab-2',
            kind: tabKinds.LINK,
            action: 'https://www.codechum.com',
          },
          {
            name: 'Tab 3',
            value: 'tab-3',
            kind: tabKinds.BUTTON,
            action: () => {},
          },
        ]}
      >
        <p>Test</p>
      </Header>
    );
    expect(component).toMatchSnapshot();
  });
});
