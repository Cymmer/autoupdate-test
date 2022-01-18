import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import Modal from './index';
import buttonTypes from '../Button/constants/buttonTypes';

describe('RENDERING - Modal', () => {
  it('should render with default props', () => {
    const component = shallow(<Modal isOpen>Test</Modal>);
    expect(component).toMatchSnapshot();
  });

  it('should render the Spinner if it is loading', () => {
    const component = shallow(
      <Modal isLoading isOpen>
        Test
      </Modal>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the contents if it is not loading', () => {
    const component = shallow(
      <Modal isOpen isLoading={false}>
        Test
      </Modal>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render close button if hasCloseButton is true', () => {
    const component = shallow(
      <Modal hasCloseButton isOpen isLoading={false}>
        Test
      </Modal>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the actions if it has actions', () => {
    const component = shallow(
      <Modal
        isOpen
        actions={[
          {
            text: 'Action 1',
            type: buttonTypes.PRIMARY.BLUE,
            kind: GLOBALS.BUTTON_KINDS.BUTTON,
            disabled: false,
            onClick: () => {},
          },
          {
            text: 'Action 2',
            type: buttonTypes.PRIMARY.GREEN,
            kind: GLOBALS.BUTTON_KINDS.BUTTON,
            onClick: () => {},
          },
        ]}
        isLoading={false}
      >
        Test
      </Modal>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('EVENTS - Modal', () => {
  it('should show a clickable button if it hasCloseButton', () => {
    const clickFn = jest.fn();
    const component = mount(
      <Modal hasCloseButton isOpen handleClose={clickFn} isLoading={false}>
        Test
      </Modal>
    );

    const closeButton = findByTestAttr(component, 'closeButton');
    closeButton.simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });
});
