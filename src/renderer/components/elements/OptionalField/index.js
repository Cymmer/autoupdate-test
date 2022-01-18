import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { IconButton, Text } from '..';
import { iconButtonTypes, textTypes } from '../constants';
import styles from './styles.module.scss';

const OptionalField = ({
  children,
  className,
  isInitiallyOpen,
  label,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  const onClick = () => {
    if (isOpen) {
      setIsOpen(false);
      onClose();
    } else {
      setIsOpen(true);
    }
  };

  const icon = isOpen ? 'close' : 'add';

  return (
    <div className={cn(styles.OptionalField, className)}>
      <div className={styles.OptionalField_info}>
        <Text type={textTypes.BODY.MD}>{label} (optional)</Text>
        <IconButton
          data-test="iconButton"
          icon={icon}
          iconClassName={cn({
            [styles.OptionalField_icon___open]: isOpen,
            [styles.OptionalField_icon___closed]: !isOpen,
          })}
          type={iconButtonTypes.SOLID.SM}
          onClick={onClick}
        />
      </div>
      <div
        className={cn({
          [styles.OptionalField_input___open]: isOpen,
          [styles.OptionalField_input___closed]: !isOpen,
        })}
      >
        {children}
      </div>
    </div>
  );
};

OptionalField.defaultProps = {
  className: null,
  isInitiallyOpen: false,
  onClose: () => {},
};

OptionalField.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isInitiallyOpen: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default OptionalField;
