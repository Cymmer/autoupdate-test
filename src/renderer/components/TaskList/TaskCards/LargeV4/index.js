import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cn from 'classnames';
import {
  determinePercentageColorName,
  formatTaskSchedule,
  getDuration,
} from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';
import { Card, SubInfo, Text } from '../../../elements';
import { textTypes } from '../../../elements/constants';

const TaskCardLargeV4 = ({
  task: {
    name,
    section: { name: sectionName },
    programming_languages: programmingLanguages,
    time_before_start: timeBeforeStart,
    time_before_end: timeBeforeEnd,
    start_time: startTime,
    end_time: endTime,
  },
  infoBars,
  mainButton,
  actionsDropdown,
}) => {
  const totalSecondsDuration = getDuration(timeBeforeStart, timeBeforeEnd);

  return (
    <Card className={styles.TaskCardLarge}>
      <div
        className={cn({
          [styles[
            `TaskCardLarge_accent___${determinePercentageColorName(
              timeBeforeEnd,
              totalSecondsDuration
            )}`
          ]]: timeBeforeStart <= 0,
          [styles.TaskCardLarge_accent___neutral]: timeBeforeStart > 0,
        })}
      />
      <div className={styles.TaskCardLarge_content}>
        <div className={styles.TaskCardLarge_info}>
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
            type={textTypes.HEADING.XS}
          >
            {name}
          </Text>
          <SubInfo
            className={styles.TaskCardLarge_subinfo}
            data={[
              {
                icon: 'school',
                text: sectionName,
              },
              {
                icon: 'code',
                text: programmingLanguages.map((pl) => pl.name).join(', '),
              },
              {
                icon: 'access_time',
                text: formatTaskSchedule(moment(startTime), moment(endTime)),
              },
            ]}
          />
          <div className={styles.TaskCardLarge_data}>{infoBars}</div>
        </div>
        <div className={styles.TaskCardLarge_buttonContainer}>
          {mainButton}

          {actionsDropdown}
        </div>
      </div>
    </Card>
  );
};

TaskCardLargeV4.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    section: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    programming_languages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    start_time: PropTypes.string,
    end_time: PropTypes.string,
    max_score: PropTypes.number.isRequired,
    time_before_start: PropTypes.number,
    time_before_end: PropTypes.number,
    is_disabled: PropTypes.bool.isRequired,
    analytics: PropTypes.shape({
      result: PropTypes.shape({
        id: PropTypes.number.isRequired,
        datetime_submitted: PropTypes.string,
        exempted: PropTypes.bool.isRequired,
        score: PropTypes.string,
      }),
      max_rank: PropTypes.number.isRequired,
      rank: PropTypes.number,
      questions_count: PropTypes.number.isRequired,
      problems_solved: PropTypes.number.isRequired,
    }),
  }).isRequired,

  infoBars: PropTypes.node.isRequired,
  mainButton: PropTypes.node.isRequired,
  actionsDropdown: PropTypes.node.isRequired,
};

export default TaskCardLargeV4;
