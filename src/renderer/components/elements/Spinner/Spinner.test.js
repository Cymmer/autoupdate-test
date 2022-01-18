import React from 'react';
import { shallow } from 'enzyme';
import GLOBALS from 'codechum-app-globals';
import Spinner from './index';
import spinnerSizes from './constants/spinnerSizes';

describe('RENDERING - Spinner', () => {
  it('should render with default props', () => {
    const component = shallow(<Spinner />);
    expect(component).toMatchSnapshot();
  });

  it('should render the passed size', () => {
    const component = shallow(<Spinner size={spinnerSizes.SM} />);
    expect(component).toMatchSnapshot();
  });

  it('should render the passed color', () => {
    const component = shallow(
      <Spinner colorName={GLOBALS.COLOR_NAMES.WHITE} />
    );
    expect(component).toMatchSnapshot();
  });
});
