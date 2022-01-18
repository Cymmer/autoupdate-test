import GLOBALS from 'codechum-app-globals';

export const slimStylesLight = {
  control: (base, state) => ({
    ...base,
    backgroundColor: GLOBALS.COLOR_HEX_CODES.NEUTRAL['50'],
    borderRadius: '8px',
    borderWidth: '1px',
    borderColor: GLOBALS.COLOR_HEX_CODES.NEUTRAL['50'],
    boxShadow: null,
    padding: '8px 12px',

    '&:hover': {
      backgroundColor: GLOBALS.COLOR_HEX_CODES.NEUTRAL['100'],
    },

    opacity: state.isDisabled ? 0.7 : 1,
  }),
  placeholder: (base, state) => ({
    ...base,
    display:
      state.isFocused || state.isSelected || state.selectProps.inputValue
        ? 'none'
        : 'block',
    margin: '0',
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0',
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
    lineHeight: '1.5',
    overflow: 'initial',
    color: GLOBALS.COLOR_HEX_CODES.NEUTRAL['700'],
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: GLOBALS.COLOR_HEX_CODES.NEUTRAL['500'],
    padding: '0',
    svg: {
      height: '16px',
      width: '16px',
    },
  }),
  clearIndicator: (base) => ({
    ...base,
    padding: '0 8px',
    svg: {
      height: '16px',
      width: '16px',
    },
  }),
  multiValue: (base) => ({
    ...base,
    borderRadius: '16px',
    margin: '0 2px',
    padding: '0 4px',
    backgroundColor: GLOBALS.COLOR_HEX_CODES.NEUTRAL['100'],
    fontWeight: '600',
  }),
  multiValueRemove: (base) => ({
    ...base,
    borderRadius: '0 12px 12px 0',
    '&:hover': {
      backgroundColor: 'transparent',
      color: GLOBALS.COLOR_HEX_CODES.RED['300'],
    },
  }),
  noOptionsMessage: (base) => ({
    ...base,
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
    lineHeight: '1.5',
    color: GLOBALS.COLOR_HEX_CODES.NEUTRAL['700'],
  }),
  groupHeading: (base) => ({
    ...base,
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.75rem',
    lineHeight: '1.5',
    color: GLOBALS.COLOR_HEX_CODES.NEUTRAL['400'],
  }),
  input: (base) => ({
    ...base,
    margin: '0',
    padding: '0',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor:
      state.isFocused || state.isSelected
        ? GLOBALS.COLOR_HEX_CODES.NEUTRAL['50']
        : null,
    color: GLOBALS.COLOR_HEX_CODES.NEUTRAL['700'],
    opacity: '1',
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
    lineHeight: '1.5',
    overflow: 'initial',
  }),
};

export const slimStylesDark = {
  control: (base, state) => ({
    ...base,
    backgroundColor: GLOBALS.COLOR_HEX_CODES.NEUTRAL['700'],
    borderRadius: '8px',
    borderWidth: '1px',
    borderColor: GLOBALS.COLOR_HEX_CODES.NEUTRAL['700'],
    boxShadow: null,
    padding: '8px 12px',

    '&:hover': {
      backgroundColor: GLOBALS.COLOR_HEX_CODES.NEUTRAL['600'],
    },

    opacity: state.isDisabled ? 0.7 : 1,
  }),
  placeholder: (base, state) => ({
    ...base,
    display:
      state.isFocused || state.isSelected || state.selectProps.inputValue
        ? 'none'
        : 'block',
    margin: '0',
    color: GLOBALS.COLOR_HEX_CODES.NEUTRAL['300'],
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0',
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
    lineHeight: '1.5',
    overflow: 'initial',
    color: GLOBALS.COLOR_HEX_CODES.NEUTRAL['0'],
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: GLOBALS.COLOR_HEX_CODES.NEUTRAL['200'],
    padding: '0',
    svg: {
      height: '16px',
      width: '16px',
    },
  }),
  clearIndicator: (base) => ({
    ...base,
    padding: '0 8px',
    svg: {
      height: '16px',
      width: '16px',
    },
    color: GLOBALS.COLOR_HEX_CODES.NEUTRAL['0'],
  }),
  multiValue: (base) => ({
    ...base,
    borderRadius: '16px',
    margin: '0 2px',
    padding: '0 4px',
    backgroundColor: GLOBALS.COLOR_HEX_CODES.NEUTRAL['600'],
    fontWeight: '600',
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: GLOBALS.COLOR_HEX_CODES.NEUTRAL['0'],
  }),
  multiValueRemove: (base) => ({
    ...base,
    borderRadius: '0 12px 12px 0',
    '&:hover': {
      backgroundColor: 'transparent',
      color: GLOBALS.COLOR_HEX_CODES.RED['300'],
    },
  }),
  noOptionsMessage: (base) => ({
    ...base,
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
    lineHeight: '1.5',
    color: GLOBALS.COLOR_HEX_CODES.NEUTRAL['0'],
  }),
  groupHeading: (base) => ({
    ...base,
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.75rem',
    lineHeight: '1.5',
    color: GLOBALS.COLOR_HEX_CODES.NEUTRAL['300'],
  }),
  input: (base) => ({
    ...base,
    margin: '0',
    padding: '0',
    color: GLOBALS.COLOR_HEX_CODES.NEUTRAL['0'],
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor:
      state.isFocused || state.isSelected
        ? GLOBALS.COLOR_HEX_CODES.NEUTRAL['700']
        : null,
    color: GLOBALS.COLOR_HEX_CODES.NEUTRAL['0'],
    opacity: '1',
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
    lineHeight: '1.5',
    overflow: 'initial',
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: GLOBALS.COLOR_HEX_CODES.NEUTRAL['800'],
  }),
};
