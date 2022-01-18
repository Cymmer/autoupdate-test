import React from 'react';
import { shallow } from 'enzyme';
import Preloader from './index';
import problemListTypes from '../constants/problemListTypes';

describe('RENDERING - ProblemList > Preloader', () => {
  it('should render the large preloader', () => {
    const component = shallow(<Preloader type={problemListTypes.LARGE} />);
    expect(component).toMatchSnapshot();
  });

  it('should render the small preloader', () => {
    const component = shallow(<Preloader type={problemListTypes.SMALL} />);
    expect(component).toMatchSnapshot();
  });
});
