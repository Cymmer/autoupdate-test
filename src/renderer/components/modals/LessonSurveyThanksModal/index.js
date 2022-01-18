import React from 'react';
import GLOBALS from 'codechum-app-globals';
import { Cody, Modal, Text } from 'components/elements';
import {
  modalSizes,
  modalPositions,
  textTypes,
} from 'components/elements/constants';
import styles from './styles.module.scss';

const LessonSurveyThanksModal = () => (
  <Modal
    isOpen
    className={styles.LessonSurveyThanksModal}
    hasCloseButton={false}
    position={modalPositions.CENTER}
    size={modalSizes.SM}
  >
    <div className={styles.LessonSurveyThanksModal_body}>
      <Cody
        className={styles.LessonSurveyThanksModal_body_image}
        type={GLOBALS.CODY_TYPES.PERFECT}
      />

      <div className={styles.LessonSurveyThanksModal_body_texts}>
        <Text
          colorClass={GLOBALS.COLOR_CLASSES.GREEN['300']}
          type={textTypes.HEADING.XS}
        >
          Thank you!
        </Text>
        <Text
          className={styles.LessonSurveyThanksModal_body_texts_message}
          colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
          type={textTypes.BODY.SM}
        >
          Your response is highly appreciated.
          <br />
          <br />I hope you’ll be able to learn programming the modern way here
          at CodeChum!
        </Text>
      </div>
    </div>
  </Modal>
);

export default LessonSurveyThanksModal;
