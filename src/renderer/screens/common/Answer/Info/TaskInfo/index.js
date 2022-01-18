import React from 'react';
import PropTypes from 'prop-types';

import { Card, Text } from 'components/elements';
import { textTypes } from 'components/elements/constants';
import styles from './styles.module.scss';

import ProblemLink from './ProblemLink';

const TaskInfo = ({ task: { name: taskName }, problemLinks }) => (
  <div className={styles.TaskInfo}>
    <Card className={styles.TaskInfo_card}>
      <Text type={textTypes.HEADING.XS}>{taskName}</Text>
    </Card>
    <div className={styles.TaskInfo_problems}>{problemLinks}</div>
  </div>
);

TaskInfo.ProblemLink = ProblemLink;

TaskInfo.propTypes = {
  task: PropTypes.object.isRequired,
  problemLinks: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default TaskInfo;
