import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { textTypes } from 'components/elements/constants';
import { Text, UserImage } from 'components/elements';
import { formatTeacherName } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

const Comment = ({ user, userType, time, content }) => (
  <div className={styles.Comment}>
    <UserImage
      image={user.profile_pic}
      imageClassName={styles.Comment_userImage}
    />
    <div className={styles.Comment_info}>
      <div
        className={cn({
          [styles.Comment_user]: userType === GLOBALS.USER_TYPES.STUDENT,
        })}
      >
        <Text
          colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
          type={textTypes.DATA.XS}
        >
          {formatTeacherName(user)}
        </Text>
        <Text
          className={cn({
            [styles.Comment_time___student]:
              userType === GLOBALS.USER_TYPES.STUDENT,
            [styles.Comment_time___teacher]:
              userType === GLOBALS.USER_TYPES.TEACHER,
          })}
          colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['400']}
          type={textTypes.BODY.XS}
        >
          {time}
        </Text>
      </div>
      <div
        className={cn({
          [styles.Comment_content]: userType === GLOBALS.USER_TYPES.STUDENT,
        })}
      >
        <Text
          colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL['700']}
          type={textTypes.BODY.XS}
        >
          {content}
        </Text>
      </div>
    </div>
  </div>
);

Comment.propTypes = {
  user: PropTypes.shape({
    profile_pic: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
  }).isRequired,
  userType: PropTypes.oneOf([
    GLOBALS.USER_TYPES.STUDENT,
    GLOBALS.USER_TYPES.TEACHER,
  ]).isRequired,
  time: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Comment;
