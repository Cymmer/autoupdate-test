import React from 'react';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';
import { Button, Cody, Modal, Span, Text } from 'components/elements';
import {
  buttonTypes,
  modalPositions,
  modalSizes,
  textTypes,
} from 'components/elements/constants';
import { LessonSatisfactionsV4Service } from 'services';
import { surveyAnswers } from './constants';
import styles from './styles.module.scss';

const LessonSurveyModal = ({ lessonTitle, lessonId, handleProceed }) => {
  const onAnswer = (answer) => {
    // Note: There is no need to wait for the request's response since
    // it is not that crucial — proceed immediately.
    LessonSatisfactionsV4Service.create({
      body: {
        lesson_id: lessonId,
        is_satisfied: answer,
      },
    });

    handleProceed();
  };

  return (
    <Modal
      isOpen
      className={styles.LessonSurveyModal}
      hasCloseButton={false}
      position={modalPositions.CENTER}
      size={modalSizes.SM}
    >
      <div className={styles.LessonSurveyModal_body}>
        <Cody
          className={styles.LessonSurveyModal_body_image}
          type={GLOBALS.CODY_TYPES.OK}
        />

        <div className={styles.LessonSurveyModal_body_texts}>
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.BLUE['300']}
            type={textTypes.HEADING.XS}
          >
            How’s our lesson so far?
          </Text>
          <Text
            className={styles.LessonSurveyModal_body_texts_question}
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.BODY.SM}
          >
            Are you satisfied with CodeChum’s lesson on{' '}
            <strong data-test="lessonTitle">{lessonTitle}</strong>{' '}
            <Span
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
              type={textTypes.BODY.SM}
            >
              (please answer honestly)
            </Span>
          </Text>
        </div>
      </div>

      <div className={styles.LessonSurveyModal_buttonContainer}>
        <Button
          data-test="btnAnswerNo"
          type={buttonTypes.TERTIARY}
          onClick={() => {
            onAnswer(surveyAnswers.NO);
          }}
        >
          No
        </Button>
        <Button
          data-test="btnAnswerYes"
          type={buttonTypes.PRIMARY.BLUE}
          onClick={() => {
            onAnswer(surveyAnswers.YES);
          }}
        >
          Yes
        </Button>
      </div>
    </Modal>
  );
};

LessonSurveyModal.propTypes = {
  lessonTitle: PropTypes.string.isRequired,
  lessonId: PropTypes.number.isRequired,
  handleProceed: PropTypes.func.isRequired,
};

export default LessonSurveyModal;
