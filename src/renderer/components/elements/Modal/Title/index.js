import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import Icon from '../../Icon';
import Text from '../../Text';
import textTypes from '../../Text/constants/textTypes';

import modalTitleTypes from '../constants/modalTitleTypes';

const ModalTitle = ({
  id,
  iconId,
  type,
  icon,
  className,
  title,
  subject,
  info,
  titleColorClass,
  textClassName,
  iconClassName,
}) => (
  <div className={cn(className, styles.ModalTitle)}>
    <Icon
      className={cn(iconClassName, styles[`ModalTitle___${type}_icon`])}
      icon={icon}
      id={iconId}
    />
    <div className={styles.ModalTitle_info}>
      <div className={styles.ModalTitle_title}>
        {type === modalTitleTypes.SMALL && (
          <Text
            className={textClassName}
            colorClass={titleColorClass || GLOBALS.COLOR_CLASSES.BLUE['300']}
            id={id}
            type={textTypes.HEADING.XXS}
          >
            {title}
          </Text>
        )}
        {type === modalTitleTypes.LARGE && (
          <>
            <Text
              className={styles.ModalTitle___large_title}
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
              id={id}
              type={textTypes.BODY.MD}
            >
              {title}
            </Text>
            <Text
              colorClass={
                titleColorClass || GLOBALS.COLOR_CLASSES.NEUTRAL['700']
              }
              type={textTypes.HEADING.SM}
            >
              {subject}
            </Text>
          </>
        )}
      </div>
      {type === modalTitleTypes.LARGE && (
        <Text
          className={styles.ModalTitle___large_info}
          colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
          type={textTypes.BODY.SM}
        >
          {info}
        </Text>
      )}
    </div>
  </div>
);

ModalTitle.defaultProps = {
  id: null,
  iconId: null,
  type: modalTitleTypes.LARGE,
  className: null,
  subject: null,
  info: null,
  titleColorClass: null,
  iconClassName: null,
  textClassName: null,
};

ModalTitle.propTypes = {
  iconId: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.oneOf([modalTitleTypes.LARGE, modalTitleTypes.SMALL]),
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  subject: PropTypes.string,
  info: PropTypes.string,
  titleColorClass: PropTypes.string,
  iconClassName: PropTypes.string,
  textClassName: PropTypes.string,
};

export default ModalTitle;
