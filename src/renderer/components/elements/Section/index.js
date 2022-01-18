import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import Text from '../Text';
import textTypes from '../Text/constants/textTypes';

const Section = ({ id, children, className, title }) => (
  <section className={cn(styles.Section, className)} id={id}>
    {title && (
      <Text
        className={styles.Section_title}
        colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
        type={textTypes.HEADING.XXXS}
      >
        {title}
      </Text>
    )}
    {children}
  </section>
);

Section.defaultProps = {
  id: null,
  className: null,
  children: null,
  title: null,
};

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  title: PropTypes.string,
};

export default Section;
