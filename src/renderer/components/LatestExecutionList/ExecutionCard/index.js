import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { determinePercentageColorClass } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

import { Card, Text, Icon, Code, Button } from '../../elements';
import {
  buttonTypes,
  textTypes,
  getSyntaxHighlighterLanguageFromExtension,
} from '../../elements/constants';

import { CodyModal } from '../../modals';

const determineExecuteModeData = (executionMode) => {
  if (executionMode === GLOBALS.EXECUTION_MODES.SUBMIT) {
    return {
      executionModeText: 'Submit',
      executionModeColor: GLOBALS.COLOR_CLASSES.GREEN['300'],
    };
  }
  if (executionMode === GLOBALS.EXECUTION_MODES.TEST) {
    return {
      executionModeText: 'Test',
      executionModeColor: GLOBALS.COLOR_CLASSES.BLUE['300'],
    };
  }

  return {};
};

const ExecutionCard = ({ execution, restoreCode }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [isRestoreConfirmation, setIsRestoreConfirmation] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);

  const {
    execution_number: executionNumber,
    mode: executionMode,
    run_score: runScore,
    perfect_score: perfectScore,
    source_codes: executionSourceCodes,
    programming_language: executionProgrammingLanguage,
  } = execution;

  const executionScore = parseInt(runScore);

  const [mainCode] = executionSourceCodes;

  const { executionModeText, executionModeColor } =
    determineExecuteModeData(executionMode);

  return (
    <>
      {isRestoreConfirmation && (
        <CodyModal
          actions={[
            {
              text: isRestoring ? 'Restoring...' : 'Restore',
              type: buttonTypes.PRIMARY.BLUE,
              disabled: isRestoring,
              onClick: async () => {
                setIsRestoring(true);
                await restoreCode(
                  executionSourceCodes,
                  executionProgrammingLanguage
                );
                setIsRestoring(false);
                setIsRestoreConfirmation(false);
              },
            },
            {
              text: 'Back',
              type: buttonTypes.TERTIARY,
              disabled: isRestoring,
              onClick: () => setIsRestoreConfirmation(false),
            },
          ]}
          body="Are you sure you want to restore this code? This will remove all your existing code in this language."
          codyType={GLOBALS.CODY_TYPES.THINKING}
          data-test="confirmationRestoreModal"
          handleClose={() => setIsRestoreConfirmation(false)}
          isOpen={isRestoreConfirmation}
          title="Restore Code?"
        />
      )}

      <Card className={styles.ExecutionCard}>
        <button
          className={styles.ExecutionCard_title}
          data-test="cardTitleButton"
          type="button"
          onClick={() => setIsToggled(!isToggled)}
        >
          <div className={styles.ExecutionCard_title_label}>
            <Text
              className={styles.ExecutionCard_title_label_executionNumber}
              data-test="executionNumberText"
              type={textTypes.HEADING.XXXS}
            >
              Execution {executionNumber}
            </Text>
            <Text
              className={styles.ExecutionCard_title_label_mode}
              colorClass={executionModeColor}
              data-test="executionModeText"
              type={textTypes.DATA.SM}
            >
              {executionModeText}
            </Text>
          </div>

          <Text
            colorClass={determinePercentageColorClass(
              executionScore,
              perfectScore
            )}
            data-test="executionScoreTotalText"
            type={textTypes.DATA.MD}
          >
            {executionScore}/{perfectScore}
          </Text>

          <div className={styles.ExecutionCard_title_actions}>
            <Button
              data-test="restoreCodeButton"
              icon="replay"
              type={buttonTypes.TEXT.BLUE}
              onClick={(e) => {
                e.stopPropagation();
                setIsRestoreConfirmation(true);
              }}
            >
              Restore Code
            </Button>
            <Icon
              className={styles.ExecutionCard_title_actions_caret}
              data-test="caret"
              icon={isToggled ? 'expand_less' : 'expand_more'}
            />
          </div>
        </button>

        {isToggled && (
          <Code
            className={styles.ExecutionCard_mainCode}
            data-test="mainCode"
            language={getSyntaxHighlighterLanguageFromExtension(
              mainCode.file_extension
            )}
          >
            {mainCode.code}
          </Code>
        )}
      </Card>
    </>
  );
};

ExecutionCard.propTypes = {
  execution: PropTypes.shape({
    execution_number: PropTypes.number.isRequired,

    // only TEST and SUBMIT are allowed
    mode: PropTypes.oneOf(
      Object.values(GLOBALS.EXECUTION_MODES).filter(
        (mode) => mode !== GLOBALS.EXECUTION_MODES.RUN
      )
    ).isRequired,

    // the score of this execution (string because this is Decimal
    // returned from the server)
    run_score: PropTypes.string.isRequired,

    perfect_score: PropTypes.number.isRequired,
    source_codes: PropTypes.arrayOf(
      PropTypes.shape({
        file_extension: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
      })
    ).isRequired,

    programming_language: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,

  // the function handler that will restore the code of this execution
  restoreCode: PropTypes.func.isRequired,
};

export default ExecutionCard;
