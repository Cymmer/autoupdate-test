import React from 'react';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import { Text } from '../../../../../components/elements';
import { textTypes } from '../../../../../components/elements/constants';

const Section = ({ title, children }) => (
  <div className={styles.Section}>
    {title && (
      <Text
        className={styles.Section_title}
        colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
        type={textTypes.HEADING.XS}
      >
        {title}
      </Text>
    )}
    {children}
  </div>
);

Section.defaultProps = {
  title: null,
  children: null,
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Section;
