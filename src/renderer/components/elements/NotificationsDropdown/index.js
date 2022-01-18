import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import Card from '../Card';
import IconButton from '../Button/IconButton';
import iconButtonTypes from '../Button/constants/iconButtonTypes';
import Text from '../Text';
import textTypes from '../Text/constants/textTypes';

import { useOnClickOutside } from '../../../hooks';

const NotificationsDropdown = ({ children, className }) => {
  const ref = useRef();
  const [isDropdownToggled, toggleDropdown] = useState(false);
  useOnClickOutside(ref, () => toggleDropdown(false));

  return (
    <div ref={ref} className={cn(styles.NotificationsDropdown, className)}>
      <IconButton
        className={cn(styles.NotificationsDropdown_button, {
          [styles.NotificationsDropdown_button___hasNotifications]:
            children?.length > 0,
        })}
        icon="notifications"
        type={iconButtonTypes.SOLID.MD}
        onClick={() => toggleDropdown(!isDropdownToggled)}
      />
      <Card
        className={cn({
          [styles.NotificationsDropdown_dropdown]: !isDropdownToggled,
          [styles.NotificationsDropdown_dropdown___toggled]: isDropdownToggled,
        })}
      >
        <div className={styles.NotificationsDropdown_head}>
          <Text type={textTypes.DATA.SM}>Notifications</Text>
        </div>
        <div className={styles.NotificationsDropdown_body}>
          {children?.length > 0 ? (
            <>{children}</>
          ) : (
            <div className={styles.NotificationsDropdown_empty}>
              <Text
                colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
                type={textTypes.BODY.SM}
              >
                No Notifications
              </Text>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

NotificationsDropdown.defaultProps = {
  className: null,
  children: null,
};

NotificationsDropdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
};

export default NotificationsDropdown;
