import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './index';

describe('RENDERING - ProgressBar', () => {
  it('should render with default props', () => {
    const component = shallow(
      <ProgressBar
        target={{
          current: {},
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });

  // TODO: Implement appropriate testing for scrolling behavior
});
