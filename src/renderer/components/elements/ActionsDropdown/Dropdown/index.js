import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Card from '../../Card';

import actionTypes from '../constants/actionTypes';
import ActionLink from '../Action/Link';
import ActionButton from '../Action/Button';

const Dropdown = ({ isToggled, actions }) => (
  <Card
    className={cn({
      [styles.Dropdown]: !isToggled,
      [styles.Dropdown___toggled]: isToggled,
    })}
  >
    {actions?.map((action, index) =>
      action.type === actionTypes.LINK ? (
        <ActionLink
          key={`Action-${index}`}
          action={action}
          data-test="actionLink"
        />
      ) : (
        <ActionButton
          key={`Action-${index}`}
          action={action}
          data-test="actionButton"
        />
      )
    )}
  </Card>
);

Dropdown.propTypes = {
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
  isToggled: PropTypes.bool.isRequired,
};

export default Dropdown;
