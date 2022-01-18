import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';

import { Container, Text, Checkbox, Button, Cody } from 'components/elements';
import { textTypes, buttonTypes } from 'components/elements/constants';
import styles from './styles.module.scss';

const FullScreenNotApprovedScreen = ({
  toggleIsFullScreenApproved,
  handleFullScreenChange,
}) => {
  const [isCheckboxChecked, toggleCheckboxChecked] = useState(false);

  return (
    <div className={styles.FullScreenNotApprovedScreen}>
      <Container className={styles.FullScreenNotApprovedScreen_container}>
        <div>
          <Cody
            className={styles.FullScreenNotApprovedScreen_container_image}
            type={GLOBALS.CODY_TYPES.WELCOME}
          />
        </div>
        <div className={styles.FullScreenNotApprovedScreen_container_content}>
          <Text
            className={
              styles.FullScreenNotApprovedScreen_container_content_title
            }
            type={textTypes.HEADING.SM}
          >
            Heads up!
          </Text>
          <Text
            className={
              styles.FullScreenNotApprovedScreen_container_content_description
            }
          >
            Since this is an exam, the browser must be in full screen mode,
            every attempt at exiting full screen mode and switching tabs will be
            recorded.
          </Text>
          <Checkbox
            checked={isCheckboxChecked}
            className={
              styles.FullScreenNotApprovedScreen_container_content_checkbox
            }
            label="I understand and would wish to proceed"
            name="is_approved"
            onChange={() => toggleCheckboxChecked(!isCheckboxChecked)}
          />

          <Button
            className={
              styles.FullScreenNotApprovedScreen_container_content_button
            }
            disabled={!isCheckboxChecked}
            kind="button"
            type={buttonTypes.PRIMARY.BLUE}
            onClick={() => {
              toggleIsFullScreenApproved(true);
              handleFullScreenChange(true);
            }}
          >
            Proceed
          </Button>
        </div>
      </Container>
    </div>
  );
};

FullScreenNotApprovedScreen.propTypes = {
  toggleIsFullScreenApproved: PropTypes.func.isRequired,
  handleFullScreenChange: PropTypes.func.isRequired,
};

export default FullScreenNotApprovedScreen;
