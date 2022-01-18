import React from 'react';
import PropTypes from 'prop-types';
import { determinePercentageColorName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import styles from '../styles.module.scss';

import { Data } from '../../../../elements';

const StudentSideData = ({ score, maxScore }) => (
  <div
    className={
      styles[
        `TaskCardSmall_accent___${determinePercentageColorName(
          parseInt(score),
          maxScore
        )}`
      ]
    }
  >
    <Data
      className={styles.TaskCardSmall_data}
      colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['0']}
      label="Score"
      labelColorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['0']}
    >
      {parseInt(score) || 0}/{maxScore}
    </Data>
  </div>
);

StudentSideData.propTypes = {
  score: PropTypes.number.isRequired,
  maxScore: PropTypes.number.isRequired,
};

export default StudentSideData;
