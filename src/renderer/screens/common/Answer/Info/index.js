import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

import QuestionInfo from './QuestionInfo';
import TaskInfo from './TaskInfo';
import Score from './Score';
import Navigation from './Navigation';

const Info = ({ taskInfo, score, questionInfo, navigation }) => (
  <div className={styles.Info}>
    <div className={styles.Info_content}>
      {questionInfo}
      {taskInfo}
    </div>
    <div className={styles.Info_actions}>
      {score}

      {navigation}
    </div>
  </div>
);

Info.QuestionInfo = QuestionInfo;
Info.Score = Score;
Info.Navigation = Navigation;
Info.TaskInfo = TaskInfo;

Info.defaultProps = {
  taskInfo: null,
  score: null,
  questionInfo: null,
  navigation: null,
};

Info.propTypes = {
  // JSX element of type Info.TaskInfo
  taskInfo: PropTypes.node,

  // JSX element of type Info.Score
  score: PropTypes.node,

  // JSX element of type Info.QuestionInfo
  questionInfo: PropTypes.node,

  // JSX element of type Info.Navigation
  navigation: PropTypes.node,
};

export default Info;
