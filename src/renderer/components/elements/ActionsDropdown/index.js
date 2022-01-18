import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

import IconButton from '../Button/IconButton';
import iconButtonTypes from '../Button/constants/iconButtonTypes';

import Dropdown from './Dropdown';
import actionTypes from './constants/actionTypes';

import { useOnClickOutside } from '../../../hooks';

const ActionsDropdown = ({ id, icon, iconButtonType, className, actions }) => {
  const ref = useRef();
  const [isDropdownToggled, toggleDropdown] = useState(false);
  useOnClickOutside(ref, () => toggleDropdown(false));

  if (actions.length === 0) {
    return null;
  }

  return (
    <div ref={ref} className={cn(className, styles.ActionsDropdown)}>
      <IconButton
        icon={icon}
        id={id}
        type={iconButtonType}
        onClick={() => toggleDropdown(!isDropdownToggled)}
      />
      <Dropdown actions={actions} isToggled={isDropdownToggled} />
    </div>
  );
};

ActionsDropdown.defaultProps = {
  className: null,
  icon: 'more_horiz',
  iconButtonType: iconButtonTypes.SOLID.LG,
  id: 'ellipseDropdown',
};

ActionsDropdown.propTypes = {
  // for dropdown container styling
  className: PropTypes.string,

  // decides which icon to use for dropdown toggle
  icon: PropTypes.string,

  // for mapping dropdown items
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf([actionTypes.BUTTON, actionTypes.LINK]),
      action: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
      icon: PropTypes.string,
      text: PropTypes.string,
      tooltip: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ).isRequired,

  iconButtonType: PropTypes.oneOf([
    iconButtonTypes.SOLID.LG,
    iconButtonTypes.SOLID.MD,
    iconButtonTypes.SOLID.SM,
    iconButtonTypes.OUTLINE.LG,
    iconButtonTypes.OUTLINE.MD,
    iconButtonTypes.OUTLINE.SM,
  ]),

  id: PropTypes.string,
};

export default ActionsDropdown;
