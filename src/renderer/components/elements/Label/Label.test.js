import React from 'react';
import { shallow } from 'enzyme';
import Label from './index';

describe('RENDERING - Label', () => {
  it('should render with default props', () => {
    const component = shallow(<Label htmlFor="test">Test</Label>);
    expect(component).toMatchSnapshot();
  });

  it('should render the appropriate disabled class if disabled', () => {
    const component = shallow(
      <Label disabled htmlFor="test">
        Test
      </Label>
    );
    expect(component).toMatchSnapshot();
  });
});
