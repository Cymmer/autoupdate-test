import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './index';

describe('RENDERING - Button', () => {
  it('should render with default props', () => {
    const component = shallow(<Button onClick={() => {}}>Test</Button>);
    expect(component).toMatchSnapshot();
  });

  it('should render an icon', () => {
    const component = shallow(
      <Button icon="test" onClick={() => {}}>
        Test
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render a spinner if loading', () => {
    const component = shallow(
      <Button isLoading onClick={() => {}}>
        Test
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('EVENTS - Button', () => {
  it('should be clickable if not disabled', () => {
    const clickFn = jest.fn();
    const component = mount(
      <Button disabled={false} icon="test" onClick={clickFn}>
        Test
      </Button>
    );

    component.simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });

  it('should not be clickable if disabled', () => {
    const clickFn = jest.fn();
    const component = mount(
      <Button disabled icon="test" onClick={clickFn}>
        Test
      </Button>
    );

    component.simulate('click');

    expect(clickFn).not.toHaveBeenCalled();
  });

  it('should not be clickable if loading', () => {
    const clickFn = jest.fn();
    const component = mount(
      <Button isLoading icon="test" onClick={clickFn}>
        Test
      </Button>
    );

    component.simulate('click');

    expect(clickFn).not.toHaveBeenCalled();
  });
});
