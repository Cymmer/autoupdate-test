import GLOBALS from 'codechum-app-globals';
import { determineRankColorClass, getRankString } from 'codechum-app-utils';
import { Grid, Modal, ModalTitle, Spinner, Text } from 'components';
import {
  gridTypes,
  modalSizes,
  modalTitleTypes,
  textTypes,
} from 'components/constants';
import { getUser } from 'ducks';
import { useTaskLeaderboard } from 'hooks';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import LeaderboardRow from './Row';
import styles from './styles.module.scss';

const LeaderboardModal = ({
  isOpen,
  handleClose,
  task,
  user: { id: studentId },
}) => {
  const { leaderboard, isLoading } = useTaskLeaderboard({ taskId: task.id });

  const studentRank =
    leaderboard?.find((record) => record.student.id === studentId)?.rank ||
    null;

  return (
    <Modal
      className={styles.LeaderboardModal}
      handleClose={handleClose}
      isOpen={isOpen}
      size={modalSizes.LG}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className={styles.LeaderboardModal_head}>
            <ModalTitle
              icon="show_chart"
              subject={task.name}
              title="View Leaderboard"
              type={modalTitleTypes.LARGE}
            />
            <div className={styles.LeaderboardModal_position}>
              <Text
                colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
                type={textTypes.BODY.MD}
              >
                Your Position:
              </Text>
              <Text
                colorClass={determineRankColorClass(studentRank)}
                type={textTypes.HEADING.SM}
              >
                {getRankString(studentRank)}
              </Text>
            </div>
          </div>
          <div className={styles.LeaderboardModal_labels}>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
              type={textTypes.BODY.MD}
            >
              Position
            </Text>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
              type={textTypes.BODY.MD}
            >
              Student
            </Text>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
              type={textTypes.BODY.MD}
            >
              Score
            </Text>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
              type={textTypes.BODY.MD}
            >
              Time
            </Text>
          </div>
          <Grid
            className={styles.LeaderboardModal_content}
            type={gridTypes.ONE}
          >
            {leaderboard.map(({ record, student, rank }) => (
              <LeaderboardRow
                key={student.id}
                rank={rank}
                record={record}
                student={student}
              />
            ))}
          </Grid>
        </>
      )}
    </Modal>
  );
};

LeaderboardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired,
};

const mapStateToProps = (store) => ({
  user: getUser(store),
});

export default connect(mapStateToProps, null)(LeaderboardModal);
