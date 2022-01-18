import cn from 'classnames';
import GLOBALS from 'codechum-app-globals';
import { Button, Container, IconButton, Text } from 'components/elements';
import {
  buttonTypes,
  iconButtonTypes,
  textTypes,
} from 'components/elements/constants';
import { getUser } from 'ducks';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';

const Navigation = ({
  nextAction,
  prevAction,

  isOnboardingPanelOpen,
  title,
  user,
}) => (
  <div
    className={cn(styles.Navigation, {
      [styles.Navigation___active_onboarding]:
        [GLOBALS.USER_TYPES.MANAGER, GLOBALS.USER_TYPES.TEACHER].includes(
          user.user_type
        ) && isOnboardingPanelOpen,
    })}
  >
    <Container className={styles.Navigation_container}>
      <Button
        className={styles.Navigation_button}
        disabled={prevAction.action === null}
        icon="keyboard_arrow_left"
        type={buttonTypes.SECONDARY.BLUE}
        onClick={prevAction.action || (() => {})}
      >
        {prevAction.text}
      </Button>
      <IconButton
        className={styles.Navigation_button___icon}
        disabled={prevAction.action === null}
        icon="keyboard_arrow_left"
        type={iconButtonTypes.OUTLINE.MD}
        onClick={prevAction.action}
      />
      <Text
        colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
        type={textTypes.BODY.MD}
      >
        {title}
      </Text>
      <Button
        className={styles.Navigation_button}
        disabled={nextAction.action === null}
        icon="keyboard_arrow_right"
        type={buttonTypes.SECONDARY.BLUE}
        onClick={nextAction.action || (() => {})}
      >
        {nextAction.text}
      </Button>
      <IconButton
        className={styles.Navigation_button___icon}
        disabled={nextAction.action === null}
        icon="keyboard_arrow_right"
        type={iconButtonTypes.OUTLINE.MD}
        onClick={nextAction.action}
      />
    </Container>
  </div>
);

Navigation.propTypes = {
  isOnboardingPanelOpen: PropTypes.bool.isRequired,
  nextAction: PropTypes.shape({
    // this may be null if the button is disabled
    action: PropTypes.func,

    text: PropTypes.string.isRequired,
  }).isRequired,
  prevAction: PropTypes.shape({
    // this may be null if the button is disabled
    action: PropTypes.func,

    text: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({
    user_type: PropTypes.oneOf(Object.values(GLOBALS.USER_TYPES)).isRequired,
  }).isRequired,
};

const mapStateToProps = (store) => ({
  user: getUser(store),
});

export default connect(mapStateToProps, null)(Navigation);
