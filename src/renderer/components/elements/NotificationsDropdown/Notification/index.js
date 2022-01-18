import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Notification = ({ children, className, viewAction }) => (
  <button
    className={cn(styles.Notification, className)}
    data-test="notificationButton"
    type="button"
    onClick={viewAction}
  >
    {children}
  </button>
);

Notification.defaultProps = {
  className: null,
};

Notification.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,

  // opens the modal to view the notification
  viewAction: PropTypes.func.isRequired,
};

export default Notification;
