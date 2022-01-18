import React from 'react';
import PropTypes from 'prop-types';
import GLOBALS from 'codechum-app-globals';

import styles from './styles.module.scss';

import { Modal, Text, ButtonGroup, Cody, Tooltip } from '../../elements';
import {
  modalSizes,
  modalPositions,
  textTypes,
  buttonTypes,
  buttonGroupDirections,
  tooltipPlacement,
} from '../../elements/constants';

const determineModalValues = (
  answer,
  proceedAction,
  proceedActionTextOverride,
  handleClose,
  isMustBePerfectShown
) => {
  let codyType = GLOBALS.CODY_TYPES.FAIL;
  let title = isMustBePerfectShown ? 'Score must be perfect.' : 'You Failed';
  let statusColor = GLOBALS.COLOR_CLASSES.RED['300'];

  const proceedButton = {
    id: 'proceedButton',
    text: proceedActionTextOverride || 'Proceed',
    onClick: proceedAction,
  };

  const resolveButton = {
    id: 'resolveButton',
    text: 'Re-Solve',
    onClick: handleClose,
  };

  let buttons = [
    {
      ...resolveButton,
      type: buttonTypes.PRIMARY.RED,
    },
    {
      ...proceedButton,
      type: buttonTypes.TERTIARY,
    },
  ];

  if (parseInt(answer.score) === answer.question.max_score) {
    codyType = GLOBALS.CODY_TYPES.PERFECT;
    title = 'Perfect!';
    statusColor = GLOBALS.COLOR_CLASSES.GREEN['300'];
    buttons = [
      {
        ...proceedButton,
        type: buttonTypes.PRIMARY.GREEN,
      },
      {
        ...resolveButton,
        type: buttonTypes.TERTIARY,
      },
    ];
  } else if (parseInt(answer.score) / answer.question.max_score >= 0.5) {
    codyType = GLOBALS.CODY_TYPES.OK;
    title = 'You Passed';
    statusColor = GLOBALS.COLOR_CLASSES.BLUE['300'];
    buttons = [
      {
        ...proceedButton,
        type: buttonTypes.PRIMARY.BLUE,
      },
      {
        ...resolveButton,
        type: buttonTypes.TERTIARY,
      },
    ];
  }

  return {
    codyType,
    title,
    statusColor,
    buttons,
  };
};

const ExecutionResultsModal = ({
  innerRef,
  isOpen,
  handleClose,
  answer,
  testCaseStatuses,
  proceedAction,
  proceedActionTextOverride,
  task,
  isMustBePerfectShown,
}) => {
  const { codyType, title, statusColor, buttons } = determineModalValues(
    answer,
    proceedAction,
    proceedActionTextOverride,
    handleClose,
    isMustBePerfectShown
  );

  const correctTestCasesCount = testCaseStatuses.filter(
    ({ executionStatus }) =>
      executionStatus === GLOBALS.EXECUTION_STATUSES.PASSED.value
  ).length;

  return (
    <Modal
      className={styles.ExecutionResultsModal}
      handleClose={handleClose}
      hasCloseButton={false}
      innerRef={innerRef}
      isOpen={isOpen}
      parentSelector="#answerTaskModalPortal"
      position={modalPositions.CENTER}
      size={modalSizes.SM}
    >
      <div className={styles.ExecutionResultsModal_cody}>
        <Cody
          className={styles.ExecutionResultsModal_cody_image}
          type={codyType}
        />
      </div>

      <div ref={innerRef} className={styles.ExecutionResultsModal_content}>
        <div className={styles.ExecutionResultsModal_content_text}>
          <div className={styles.ExecutionResultsModal_title}>
            <Text colorClass={statusColor} type={textTypes.HEADING.XS}>
              {title}
            </Text>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['500']}
              type={textTypes.BODY.XS}
            >
              {answer.question.problem.name}
            </Text>
          </div>
          <div>
            <div className={styles.ExecutionResultsModal_data}>
              <Text type={textTypes.BODY.SM}>Test Cases:</Text>
              <Text colorClass={statusColor} type={textTypes.DATA.SM}>
                {correctTestCasesCount}/
                {answer.question.problem.test_cases.length}
              </Text>
            </div>
            <div className={styles.ExecutionResultsModal_data}>
              <Text type={textTypes.BODY.SM}>Score:</Text>
              {task.is_delayed_grading ? (
                <Tooltip
                  content="Your teacher has chosen to check your work manually. Your score will be available once your teacher is finished grading your work."
                  placement={tooltipPlacement.BOTTOM}
                >
                  <Text colorClass={statusColor} type={textTypes.DATA.SM}>
                    -/{answer.question.max_score}
                  </Text>
                </Tooltip>
              ) : (
                <Text colorClass={statusColor} type={textTypes.DATA.SM}>
                  {parseInt(answer.score)}/{answer.question.max_score}
                </Text>
              )}
            </div>
          </div>
        </div>
        <ButtonGroup
          buttons={buttons}
          direction={buttonGroupDirections.VERTICAL}
        />
      </div>
    </Modal>
  );
};

ExecutionResultsModal.defaultProps = {
  proceedActionTextOverride: null,
  isMustBePerfectShown: false,
};

ExecutionResultsModal.propTypes = {
  innerRef: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  answer: PropTypes.object.isRequired,
  testCaseStatuses: PropTypes.arrayOf(
    PropTypes.shape({
      executionStatus: PropTypes.oneOf([
        GLOBALS.EXECUTION_STATUSES.FAILED.value,
        GLOBALS.EXECUTION_STATUSES.PASSED.value,
        GLOBALS.EXECUTION_STATUSES.TIMED_OUT.value,
      ]),
    })
  ).isRequired,
  proceedAction: PropTypes.func.isRequired,
  task: PropTypes.object,

  // the text override for the proceed action
  proceedActionTextOverride: PropTypes.string,
  isMustBePerfectShown: PropTypes.bool,
};

export default ExecutionResultsModal;
