import React from 'react';
import PropTypes from 'prop-types';
import { determineScoreText, determineTimeText } from 'codechum-app-utils';

import { Card, Text, UserImage } from 'components';
import { textTypes } from 'components/constants';

import styles from './styles.module.scss';

const LeaderboardRow = ({ rank, record, student }) => (
  <Card className={styles.LeaderboardRow}>
    <Text className={styles.LeaderboardRow_position} type={textTypes.DATA.SM}>
      {rank || '-'}
    </Text>
    <div className={styles.LeaderboardRow_user}>
      <UserImage
        className={styles.LeaderboardRow_user_image}
        image={student.profile_pic}
      />
      <Text type={textTypes.BODY.SM}>
        {student.display_name || `${student.last_name}, ${student.first_name}`}
      </Text>
    </div>
    <Text className={styles.LeaderboardRow_score} type={textTypes.BODY.SM}>
      {determineScoreText(record)}
    </Text>
    <Text className={styles.LeaderboardRow_time} type={textTypes.BODY.SM}>
      {determineTimeText(record)}
    </Text>
  </Card>
);

LeaderboardRow.defaultProps = {
  record: null,
};

LeaderboardRow.propTypes = {
  rank: PropTypes.number.isRequired,
  record: PropTypes.object,
  student: PropTypes.object.isRequired,
};

export default LeaderboardRow;
