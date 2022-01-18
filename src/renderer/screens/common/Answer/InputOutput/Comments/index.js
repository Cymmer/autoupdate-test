import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card, Spinner } from 'components/elements';
import { Comment } from 'components';
import { useAnswerComments } from 'hooks';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

const Comments = ({ answerId }) => {
  const { isLoading: isAnswerCommentsLoading, answerComments } =
    useAnswerComments({ answerId });

  if (isAnswerCommentsLoading) {
    return (
      <Card className={styles.Comments___loading}>
        <Spinner />
      </Card>
    );
  }

  return (
    <div className={styles.Comments}>
      {answerComments?.map(
        ({
          id,
          posted_by: postedBy,
          datetime_created: datetimeCreated,
          comment,
        }) => (
          <Comment
            key={`comment-${id}`}
            content={comment}
            time={moment(datetimeCreated).fromNow()}
            user={postedBy}
            userType={GLOBALS.USER_TYPES.STUDENT}
          />
        )
      )}
    </div>
  );
};

Comments.propTypes = {
  answerId: PropTypes.number.isRequired,
};

export default Comments;
