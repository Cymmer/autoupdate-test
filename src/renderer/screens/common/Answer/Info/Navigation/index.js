import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';

import { Card, Text } from 'components/elements';
import { textTypes } from 'components/elements/constants';
import styles from './styles.module.scss';

const Navigation = ({
  menuButton,
  leftButton,
  navigationText,
  rightButton,
  submitButton,
  className,
}) => (
  <Card className={cn(styles.Navigation, className)}>
    {menuButton}
    <div className={styles.Navigation_nav}>
      {leftButton}

      {navigationText && (
        <Text
          className={styles.Navigation_nav_text}
          colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
          type={textTypes.BODY.MD}
        >
          {navigationText}
        </Text>
      )}

      {rightButton}

      {submitButton}
    </div>
  </Card>
);

Navigation.defaultProps = {
  menuButton: null,

  // left button, right button, and navigation text
  // may be null if the task info is toggled but
  // if one of them is null, THE REST MUST ALSO
  // be null
  leftButton: null,
  navigationText: null,
  rightButton: null,

  submitButton: null,
  className: null,
};

Navigation.propTypes = {
  // the button that'll toggle the menu (switches the question info
  // to task info and vice versa)
  menuButton: PropTypes.element,

  // the button that'll navigate to the previous problem
  leftButton: PropTypes.element,

  // the button that'll navigate to the next problem
  rightButton: PropTypes.element,

  // the text in between the button
  navigationText: PropTypes.string,

  // the button that'll toggle the Are You Sure modal, in preparetion
  // for the submission of the whole Result of the student
  submitButton: PropTypes.element,

  className: PropTypes.string,
};

export default Navigation;
