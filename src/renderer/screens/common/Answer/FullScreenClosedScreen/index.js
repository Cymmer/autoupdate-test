import React from 'react';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';

import { Container, Text, Button, Cody } from 'components/elements';
import { textTypes, buttonTypes } from 'components/elements/constants';
import styles from './styles.module.scss';

const FullScreenClosedScreen = ({ handleFullScreenChange }) => (
  <div className={styles.FullScreenClosedScreen}>
    <Container className={styles.FullScreenClosedScreen_container}>
      <div>
        <Cody
          className={styles.FullScreenClosedScreen_container_image}
          type={GLOBALS.CODY_TYPES.THINKING}
        />
      </div>
      <div className={styles.FullScreenClosedScreen_container_content}>
        <Text
          class={styles.FullScreenClosedScreen_container_content_title}
          type={textTypes.HEADING.SM}
        >
          Whoops
        </Text>
        <Text
          className={
            styles.FullScreenClosedScreen_container_content_description
          }
        >
          Looks like you went out. Try not to do that again.
        </Text>
        <Button
          className={styles.FullScreenClosedScreen_container_content_button}
          kind="button"
          type={buttonTypes.PRIMARY.BLUE}
          onClick={() => {
            handleFullScreenChange(true);
          }}
        >
          Proceed
        </Button>
      </div>
    </Container>
  </div>
);

FullScreenClosedScreen.propTypes = {
  handleFullScreenChange: PropTypes.func.isRequired,
};

export default FullScreenClosedScreen;
