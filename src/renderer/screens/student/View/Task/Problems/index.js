import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { problemListTypes } from 'components/constants';
import { ProblemList, ProblemCardSmall } from 'components';
import { useResults, useSectionsV4, useTasksCount } from 'hooks';
import { getServerDateTime, getUser } from 'ducks';
import { MixpanelTrackService } from 'services';
import { ButtonLink } from 'components/elements';
import { isFeatureLocked } from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import styles from './styles.module.scss';

const Problems = ({
  task: {
    id: taskId,
    questions,
    is_randomized: isRandomized,
    is_disabled: isDisabled,
  },
  user,
  serverDateTime,
}) => {
  const history = useHistory();

  const { id: studentId } = user;
  const { isLoading: areResultsLoading, results } = useResults({
    isExtended: true,
    params: {
      taskId,
      studentId,
    },
  });

  // list all the active sections of the student
  const { data: sections } = useSectionsV4({
    isExtended: false,
    params: {
      isActive: true,
      hasStudentId: studentId,
    },
  });
  const { count: examsCount } = useTasksCount({
    isPaused: !sections,
    params: {
      status: 'present',
      isExam: true,
      sectionIds: sections?.map((section) => section.id).join(','),
    },
  });

  // a student can only have 1 Result object so we get the first one
  const studentResult = results ? results[0] : null;

  let sortedQuestions = [...questions];
  if (!areResultsLoading && studentResult && isRandomized) {
    // sort the questions
    sortedQuestions = sortedQuestions.sort((a, b) => {
      const answerA = studentResult?.answers?.find(
        (answer) => answer.question_id === a.id
      );
      const answerB = studentResult?.answers?.find(
        (answer) => answer.question_id === b.id
      );

      return answerA.number - answerB.number;
    });
  }

  const isReviewTaskLocked = isFeatureLocked(
    GLOBALS.USER_FEATURES.REVIEW_TASK,
    user,
    serverDateTime
  );

  return (
    <>
      <ProblemList
        actionsDisabled={{
          edit: true,
          delete: true,
          view: true,
        }}
        className={styles.Problems}
        isLoading={areResultsLoading}
        type={problemListTypes.SMALL}
      >
        {sortedQuestions.map((question, questionNumber) => {
          const score =
            studentResult?.answers?.find(
              (answer) => answer.question_id === question.id
            )?.score || 0;

          return (
            <ProblemCardSmall
              key={question.id}
              data-test={`problemCard-${question.id}`}
              problem={question.problem}
              score={`${parseInt(score)}/${question.max_score}`}
              onClick={
                !isReviewTaskLocked && !isDisabled && examsCount === 0
                  ? () => {
                      history.push(
                        `/student/review/${taskId}/question/${
                          questionNumber + 1
                        }`
                      );
                    }
                  : null
              }
            />
          );
        })}
      </ProblemList>
      <div className={styles.Problems_review}>
        <ButtonLink
          data-test="reviewTaskLink"
          disabled={isDisabled || examsCount !== 0}
          isLocked={isReviewTaskLocked}
          to={
            !isDisabled && examsCount === 0
              ? `/student/review/${taskId}/question/1`
              : '#'
          }
          onClick={async () => {
            await MixpanelTrackService.create({
              body: {
                event_name: 'Review Button (View Task > Problems Tab)',
                event_properties: {
                  'Task ID': taskId,
                },
              },
            });
          }}
        >
          Review Problems
        </ButtonLink>
      </div>
    </>
  );
};

Problems.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        problem: PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string.isRequired,
          tags: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              name: PropTypes.string.isRequired,
            })
          ).isRequired,
        }).isRequired,
        max_score: PropTypes.number.isRequired,
      })
    ).isRequired,
    is_randomized: PropTypes.bool.isRequired,
    is_disabled: PropTypes.bool.isRequired,
  }).isRequired,
  user: PropTypes.object.isRequired,
  serverDateTime: PropTypes.object.isRequired,
};

const mapStateToProps = (store) => ({
  user: getUser(store),
  serverDateTime: getServerDateTime(store),
});

export default connect(mapStateToProps, null)(Problems);
