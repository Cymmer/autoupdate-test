import React from 'react';
import { shallow } from 'enzyme';
import GLOBALS from 'codechum-app-globals';
import SubInfo from './index';

describe('RENDERING - SubInfo', () => {
  it('should render with default props', () => {
    const component = shallow(<SubInfo data={[]} />);
    expect(component).toMatchSnapshot();
  });

  it('should render the loading state if it is loading', () => {
    const component = shallow(<SubInfo isLoading data={[]} />);
    expect(component).toMatchSnapshot();
  });

  it('should render the correct number of data passed if not loading', () => {
    const component = shallow(
      <SubInfo
        data={[
          {
            icon: 'test1',
            text: 'Test 1',
            colorClass: GLOBALS.COLOR_CLASSES.BLUE['300'],
          },
          {
            icon: 'test2',
            text: 'Test 2',
            colorClass: GLOBALS.COLOR_CLASSES.RED['300'],
          },
        ]}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
