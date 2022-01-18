import React from 'react';
import { shallow } from 'enzyme';
import FunFactCard from './index';

describe('RENDERING - FunFactCard', () => {
  it('should render with default props', () => {
    const component = shallow(
      <FunFactCard mainTextJsx={<h1>Main Dummy</h1>} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render its childrenJsx', () => {
    const component = shallow(
      <FunFactCard
        childrenJsx={<p>Children Dummy</p>}
        mainTextJsx={<h1>Main Dummy</h1>}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
