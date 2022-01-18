import React from 'react';
import { shallow } from 'enzyme';
import InfoList from './index';

describe('RENDERING - InfoList', () => {
  it('should render with default props', () => {
    const component = shallow(
      <InfoList>
        <p>Dummy Child 1</p>
        <p>Dummy Child 2</p>
      </InfoList>
    );
    expect(component).toMatchSnapshot();
  });
});
