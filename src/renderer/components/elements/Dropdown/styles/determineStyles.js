import dropdownTypes from '../constants/dropdownTypes';
import { formStylesLight, formStylesDark } from './formStyles';
import { slimStylesLight, slimStylesDark } from './slimStyles';
import { largeStylesLight, largeStylesDark } from './largeStyles';
import {
  playgroundStylesLight,
  playgroundStylesDark,
} from './playgroundStyles';

const determineStyles = (type, isNightMode) => {
  switch (type) {
    case dropdownTypes.FORM:
      return isNightMode ? formStylesDark : formStylesLight;
    case dropdownTypes.SLIM:
      return isNightMode ? slimStylesDark : slimStylesLight;
    case dropdownTypes.LARGE:
      return isNightMode ? largeStylesDark : largeStylesLight;
    case dropdownTypes.PLAYGROUND:
      return isNightMode ? playgroundStylesDark : playgroundStylesLight;
    default:
      return isNightMode ? slimStylesDark : slimStylesLight;
  }
};

export default determineStyles;
