import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumbs from './index';

describe('RENDERING - Breadcrumbs', () => {
  it('should render with default props', () => {
    const component = shallow(<Breadcrumbs />);
    expect(component).toMatchSnapshot();
  });

  it('should render appropriate number of links', () => {
    const component = shallow(
      <Breadcrumbs
        links={[
          {
            name: 'Link 1',
            link: 'www.codechum.com',
          },
          {
            name: 'Link 2',
            link: 'app.codechum.com',
          },
        ]}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
