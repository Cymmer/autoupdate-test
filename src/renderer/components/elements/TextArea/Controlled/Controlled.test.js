import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import Controlled from './index';
import textAreaTypes from '../constants/textAreaTypes';

describe('RENDERING - TextArea > Controlled', () => {
  it('should render with default props', () => {
    const component = shallow(<Controlled name="test" onChange={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  it('should render the placeholder if it has a placeholder appropriately', () => {
    let component = shallow(
      <Controlled
        name="test"
        placeholder="Test"
        type={textAreaTypes.FORM}
        onChange={() => {}}
      />
    );
    expect(component).toMatchSnapshot();

    component = shallow(
      <Controlled
        name="test"
        placeholder="Test"
        type={textAreaTypes.CODE}
        onChange={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the icon if it has an icond', () => {
    const component = shallow(
      <Controlled icon="test" name="test" onChange={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the helper text if it has a helper text', () => {
    const component = shallow(
      <Controlled helperText="Test" name="test" onChange={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the error message if it has an error message', () => {
    const component = shallow(
      <Controlled error="Test" name="test" onChange={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the success message if it has an success message', () => {
    const component = shallow(
      <Controlled name="test" success="Test" onChange={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });
});

describe('EVENTS - TextArea > Controlled', () => {
  it('should be changeable if not disabled', () => {
    const changeFn = jest.fn();
    const component = mount(<Controlled name="test" onChange={changeFn} />);

    const textArea = findByTestAttr(component, 'textArea');
    textArea.simulate('change', {
      target: {
        value: 'New Value',
      },
    });

    expect(changeFn).toHaveBeenCalled();
  });

  it('should not be changeable if disabled', () => {
    const changeFn = jest.fn();
    const component = mount(
      <Controlled disabled name="test" onChange={changeFn} />
    );

    const textArea = findByTestAttr(component, 'textArea');

    // in checking for an textArea if it is indeed disabled,
    // we do not simulate a change event because that
    // overrides the disabled state. Instead, we just check
    // if the disabled prop was indeed passed to the textArea
    expect(textArea.prop('disabled')).toBe(true);
  });
});
