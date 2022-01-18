import React from 'react';
import { shallow } from 'enzyme';
import Title from './index';
import modalTitleTypes from '../constants/modalTitleTypes';

describe('RENDERING - Modal > Title', () => {
  it('should render with default props', () => {
    const component = shallow(<Title icon="test" title="Test" />);
    expect(component).toMatchSnapshot();
  });

  it('should render the title if type is SMALL', () => {
    const component = shallow(
      <Title icon="test" title="Test" type={modalTitleTypes.SMALL} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the title, subject, and info if type is LARGE', () => {
    const component = shallow(
      <Title icon="test" title="Test" type={modalTitleTypes.LARGE} />
    );
    expect(component).toMatchSnapshot();
  });
});
