import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from '../tabs.module.scss';

import IconButton from '../../Button/IconButton';
import iconButtonTypes from '../../Button/constants/iconButtonTypes';

import tabTypes from '../constants/tabTypes';

const TabButton = ({
  innerRef,
  className,
  children,
  type,
  active,
  onClick,
  closeAction,
  id,
  hasNewData,
}) => (
  <button
    ref={(e) => {
      if (innerRef) {
        innerRef.current = e;
      }
    }}
    className={cn(className, {
      [styles[`Tab___${type}___active`]]: active,
      [styles[`Tab___${type}`]]: !active,
      [styles[`Tab___${type}___hasNewData`]]: hasNewData,
      [styles.Tab___withClose]: closeAction && active,
    })}
    data-test="tabButton"
    id={id}
    type="button"
    onClick={onClick}
  >
    {children}
    {closeAction && active && (
      <IconButton
        className={styles.Tab_close}
        data-test="closeButton"
        icon="close"
        type={iconButtonTypes.SOLID.XS}
        onClick={closeAction}
      />
    )}
  </button>
);

TabButton.defaultProps = {
  className: null,
  active: false,
  type: tabTypes.HORIZONTAL.LG,
  closeAction: null,
  id: null,
  hasNewData: false,
};

TabButton.propTypes = {
  innerRef: PropTypes.object,
  className: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([
    tabTypes.HORIZONTAL.LG,
    tabTypes.HORIZONTAL.SM,
    tabTypes.VERTICAL.LG,
    tabTypes.VERTICAL.SM,
  ]),
  closeAction: PropTypes.func,
  id: PropTypes.string,
  hasNewData: PropTypes.bool,
};

export default TabButton;
