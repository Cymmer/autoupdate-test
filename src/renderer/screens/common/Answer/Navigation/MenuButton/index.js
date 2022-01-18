import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/elements';
import { buttonTypes } from 'components/elements/constants';

const MenuButton = ({ isToggled, disabled, onClick }) => (
  <Button
    disabled={disabled}
    icon={!isToggled ? 'menu' : 'close'}
    type={buttonTypes.SECONDARY.BLUE}
    onClick={onClick}
  >
    {!isToggled ? 'Overview' : 'Close'}
  </Button>
);

MenuButton.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
