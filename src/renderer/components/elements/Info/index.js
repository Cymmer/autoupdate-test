import React from 'react';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import Text from '../Text';
import textTypes from '../Text/constants/textTypes';

import infoSizes from './constants/infoSizes';
import Tooltip from '../Tooltip';
import { tooltipPlacement } from '../Tooltip/constants';
import Icon from '../Icon';

const Info = ({ label, children, className, size, id, tooltip }) => (
  <div className={className} id={id}>
    <Text
      className={styles.Info_label}
      colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
      type={size === infoSizes.MD ? textTypes.BODY.MD : textTypes.BODY.SM}
    >
      {label}
      {tooltip !== null && (
        <Tooltip
          className={styles.Info_label_tooltip}
          content={tooltip}
          placement={tooltipPlacement.RIGHT}
        >
          <Icon icon="info" />
        </Tooltip>
      )}
    </Text>
    <Text
      className={styles.Info_text}
      type={size === infoSizes.MD ? textTypes.BODY.MD : textTypes.BODY.SM}
    >
      {children}
    </Text>
  </div>
);

Info.defaultProps = {
  className: null,
  id: null,
  size: infoSizes.MD,
  tooltip: null,
};

Info.propTypes = {
  tooltip: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf([infoSizes.MD, infoSizes.SM]),
};

export default Info;
