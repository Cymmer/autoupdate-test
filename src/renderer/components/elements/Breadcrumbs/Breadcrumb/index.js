import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

import Icon from '../../Icon';

const Breadcrumb = ({ children, link, active }) => (
  <Link
    className={cn({
      [styles.Breadcrumb]: !active,
      [styles.Breadcrumb___active]: active,
    })}
    to={link}
  >
    <span className={styles.Breadcrumb_text}>{children}</span>
    {!active && (
      <Icon
        className={styles.Breadcrumb_icon}
        icon="chevron_right"
        id="chevronRight"
      />
    )}
  </Link>
);

Breadcrumb.defaultProps = {
  active: false,
};

Breadcrumb.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default Breadcrumb;
