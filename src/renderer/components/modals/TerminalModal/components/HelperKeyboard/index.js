import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './styles.scss';

const HelperKeyboard = ({ handleKeyPress }) => {
  const keyboard = useRef();
  const [currentLayout, setCurrentLayout] = useState('default');

  const handleLayoutChange = (button) => {
    let layoutName;

    switch (button) {
      case '{shift}':
      case '{shiftactivated}':
      case '{default}':
        layoutName = currentLayout === 'default' ? 'shift' : 'default';
        break;

      case '{alt}':
        layoutName = currentLayout === 'alt' ? 'default' : 'alt';
        break;

      case '{othersymbols}':
        layoutName = 'othersymbols';
        break;

      default:
        break;
    }

    if (layoutName) {
      setCurrentLayout(layoutName);
    }
  };

  const onKeyPress = (button) => {
    let buttonValue = button;
    if (button === '{bksp}') {
      buttonValue = 'Backspace';
    } else if (button === '{enter}') {
      buttonValue = 'Enter';
    } else if (button === '{space}') {
      buttonValue = ' ';
    }

    if (buttonValue.includes('{') && buttonValue.includes('}')) {
      handleLayoutChange(buttonValue);
    } else {
      handleKeyPress(buttonValue);
    }
  };

  return (
    <Keyboard
      display={{
        '{alt}': '123',
        '{shift}': '⇧',
        '{shiftactivated}': '⬆',
        '{enter}': 'return',
        '{bksp}': '⌫',
        '{space}': ' ',
        '{default}': 'ABC',
        '{back}': '⇦',
        '{othersymbols}': '#+=',
      }}
      keyboardRef={(r) => (keyboard.current = r)}
      layout={{
        default: [
          'q w e r t y u i o p',
          'a s d f g h j k l',
          '{shift} z x c v b n m {bksp}',
          '{alt} {space} {enter}',
        ],
        shift: [
          'Q W E R T Y U I O P',
          'A S D F G H J K L',
          '{shiftactivated} Z X C V B N M {bksp}',
          '{alt} {space} {enter}',
        ],
        alt: [
          '1 2 3 4 5 6 7 8 9 0',
          '- / : ; ( ) $ & @ "',
          "{othersymbols} . , ? ! ' {bksp}",
          '{default} {space} {enter}',
        ],
        othersymbols: [
          '[ ] { } # % ^ * + =',
          '_ \\ | ~ < > € £ ¥ ·',
          "{alt} . , ? ! ' {bksp}",
          '{default} {space} {enter}',
        ],
      }}
      layoutName={currentLayout}
      theme="hg-theme-default hg-theme-ios"
      onKeyPress={onKeyPress}
    />
  );
};

HelperKeyboard.propTypes = {
  handleKeyPress: PropTypes.func.isRequired,
};

export default HelperKeyboard;
