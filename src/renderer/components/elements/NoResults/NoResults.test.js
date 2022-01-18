import React from 'react';
import { shallow } from 'enzyme';
import GLOBALS from 'codechum-app-globals';
import NoResults from './index';

describe('RENDERING - NoResults', () => {
  it('should render with default props', () => {
    const component = shallow(<NoResults />);
    expect(component).toMatchSnapshot();
  });

  it('should render the appropriate cody type', () => {
    let component = shallow(
      <NoResults codyType={GLOBALS.CODY_TYPES.WELCOME} />
    );
    expect(component).toMatchSnapshot();

    component = shallow(<NoResults codyType={GLOBALS.CODY_TYPES.ERROR} />);
    expect(component).toMatchSnapshot();
  });

  it('should render a button if it has a action of type function', () => {
    const component = shallow(
      <NoResults
        action={{
          action: () => {},
          text: 'Test',
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render a buttonlink if it has a action of type string', () => {
    const component = shallow(
      <NoResults
        action={{
          action: 'https://www.codechum.com',
          text: 'Test',
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
