import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SectionCourseTimelineV4 } from 'components';

import {
  useResults,
  useLessonObjectStatusExist,
  useCourseDataV4,
  useMixpanelTrack,
} from 'hooks';
import {
  isCourseQuiz,
  isTaskFinished,
  isTaskHasntStarted,
  momentToDateTimeWithTimezone,
  isSameOrAfterWithoutSeconds,
} from 'codechum-app-utils';
import { actionTypes } from 'components/elements/constants';
import { getUser } from 'ducks';
import { LessonObjectStatusesService } from 'services';
import GLOBALS from 'codechum-app-globals';
import { viewSectionTabs } from '../../../constants';
import Preloader from '../../Preloader';
import styles from './styles.module.scss';

const { CourseObjectCard, NextCourseObjectCard } = SectionCourseTimelineV4;

const determineObjectValues = ({ courseObjects }) => {
  // we remove the introduction and the summary objects
  const filteredObjects = courseObjects.filter(
    (obj) => !obj?.is_introduction && !obj?.is_summary
  );

  const unlockedCourseObjects = filteredObjects.filter((obj, index) =>
    isCourseQuiz(obj)
      ? obj.is_locked === false &&
        filteredObjects[index - 1]?.has_finished_previous_lesson === true
      : obj.is_locked === false && obj.has_finished_previous_lesson === true
  );
  const lockedCourseObjects = filteredObjects.filter((obj, index) =>
    isCourseQuiz(obj)
      ? obj.is_locked === true ||
        filteredObjects[index - 1]?.has_finished_previous_lesson === false
      : obj.is_locked === true || obj.has_finished_previous_lesson === false
  );

  // we remove the last unlocked course object from the unlocked courses
  // and set it as the next course object
  const nextCourseObject = unlockedCourseObjects.pop();

  return {
    unlockedCourseObjects,
    nextCourseObject,
    lockedCourseObjects,
  };
};

const determineQuizCardText = (task, results) => {
  if (isTaskFinished(task)) {
    return 'Review Quiz';
  }

  // if it went here, it means that the task is already starting

  const taskResult = results.find((result) => result.task_id === task.id);

  let isRetakeFinished = false;

  if (taskResult?.retake_end_datetime) {
    const currTime = moment();
    const endTime = moment(taskResult.retake_end_datetime);
    isRetakeFinished = isSameOrAfterWithoutSeconds(currTime, endTime);
  }

  if (taskResult?.datetime_submitted || isRetakeFinished) {
    return 'Review Quiz';
  }

  if (taskResult) {
    return 'Continue Quiz';
  }

  return 'Start Quiz';
};

const determineQuizCardLink = (task, results) => {
  if (isTaskFinished(task)) {
    return `/student/review/${task.id}/question/1`;
  }

  // if it went here, it means that the task is already starting

  const taskResult = results.find((result) => result.task_id === task.id);

  let isRetakeFinished = false;

  if (taskResult?.retake_end_datetime) {
    const currTime = moment();
    const endTime = moment(taskResult.retake_end_datetime);
    isRetakeFinished = isSameOrAfterWithoutSeconds(currTime, endTime);
  }

  if (taskResult?.datetime_submitted || isRetakeFinished) {
    return `/student/review/${task.id}/question/1`;
  }

  return `/student/answer/${task.id}/question/1`;
};

const determineQuizCardIsDisabled = (task) => {
  if (isTaskFinished(task)) return task.has_exam_ongoing;
  if (task.has_submitted) return true;

  return isTaskHasntStarted(task);
};

const Timeline = ({
  courseDataId,
  section: { id: sectionId },
  user: { id: studentId },
  downloadCertificateButton,
}) => {
  const history = useHistory();

  const { isLoading: isCourseDataLoading, courseData } = useCourseDataV4({
    courseDataId,
  });

  const { course_objects: courseObjects } = courseData || {};
  const { isLoading: areResultsLoading, results } = useResults({
    isExtended: false,
    params: {
      taskIds: courseObjects
        ?.filter((obj) => isCourseQuiz(obj))
        ?.map((courseObject) => courseObject.task.id)
        .join(','),
      studentId,
    },
    isPaused: courseObjects == null,
  });

  const {
    isLoading: doesLessonObjectStatusExistLoading,
    doesExist: doesIntroductionLessonObjectStatusExist,
  } = useLessonObjectStatusExist({
    params: {
      lessonObjectId: courseObjects
        ? courseObjects.find((obj) => obj.is_introduction).first_lesson_object
            .id
        : null,
      studentId,
    },
  });

  useMixpanelTrack({
    body: {
      event_name: 'Go to View Class Screen > Timeline Tab',
      event_properties: {
        'Section ID': sectionId,
      },
    },
  });

  if (
    isCourseDataLoading ||
    areResultsLoading ||
    doesLessonObjectStatusExistLoading
  ) {
    return <Preloader />;
  }

  const introductionObject = courseObjects.find(
    (obj) => obj.is_introduction === true
  );

  const { unlockedCourseObjects, nextCourseObject, lockedCourseObjects } =
    determineObjectValues({ courseObjects });

  return (
    <>
      <SectionCourseTimelineV4
        data-test="sectionCourseTimeline"
        introductionLink={`/student/classes/${sectionId}/${viewSectionTabs.TIMELINE.value}/lessons/${introductionObject.slug}/${introductionObject.first_lesson_object.slug}`}
        lockedCourseObjectsJsx={lockedCourseObjects.map(
          (courseObject, index) => (
            <CourseObjectCard
              key={courseObject.id}
              actions={
                isCourseQuiz(courseObject)
                  ? [
                      {
                        type: actionTypes.BUTTON,
                        text: 'Start Quiz',
                        disabled: courseObject.is_locked,
                        action:
                          courseObject.is_locked === false
                            ? () => {
                                history.push(
                                  determineQuizCardLink(
                                    courseObject.task,
                                    results
                                  )
                                );
                              }
                            : () => {},
                      },
                    ]
                  : [
                      {
                        type: actionTypes.BUTTON,
                        text: 'View Lesson',
                        disabled: true,
                        tooltip:
                          courseObject.is_locked === false &&
                          courseObject.has_finished_previous_lesson === false
                            ? 'Your teacher has already unlocked this but you need to finish the previous lesson in order to view this one.'
                            : null,
                        action: () => {},
                      },
                    ]
              }
              courseObject={courseObject}
              hasEvenPosition={index % 2 === 0}
            />
          )
        )}
        nextCourseObjectJsx={
          nextCourseObject && (
            <NextCourseObjectCard
              actions={
                isCourseQuiz(nextCourseObject)
                  ? [
                      {
                        type: actionTypes.BUTTON,
                        text: determineQuizCardText(
                          nextCourseObject.task,
                          results
                        ),
                        disabled: determineQuizCardIsDisabled(
                          nextCourseObject.task
                        ),
                        action: () => {
                          history.push(
                            determineQuizCardLink(
                              nextCourseObject.task,
                              results
                            )
                          );
                        },
                      },
                    ]
                  : [
                      {
                        type: actionTypes.BUTTON,
                        text: 'View Lesson',
                        disabled: false,
                        action: () => {
                          if (!doesIntroductionLessonObjectStatusExist) {
                            // before redirecting to the Introduction topic, create a
                            // LessonObjectStatus first
                            LessonObjectStatusesService.create({
                              body: {
                                datetime_started: momentToDateTimeWithTimezone(
                                  moment()
                                ),
                                lesson_object_id:
                                  introductionObject.first_lesson_object.id,
                                student_id: studentId,
                              },
                            }).then(() => {
                              history.push(
                                `/student/classes/${sectionId}/${viewSectionTabs.TIMELINE.value}/lessons/${introductionObject.slug}/${introductionObject.first_lesson_object.slug}`
                              );
                            });
                          } else {
                            history.push(
                              `/student/classes/${sectionId}/${viewSectionTabs.TIMELINE.value}/lessons/${nextCourseObject.slug}/${nextCourseObject.first_lesson_object.slug}`
                            );
                          }
                        },
                      },
                    ]
              }
              courseObject={nextCourseObject}
              userType={GLOBALS.USER_TYPES.STUDENT}
            />
          )
        }
        summaryLink="#"
        unlockedCourseObjectsJsx={unlockedCourseObjects.map(
          (courseObject, index) => (
            <CourseObjectCard
              key={courseObject.id}
              actions={
                isCourseQuiz(courseObject)
                  ? [
                      {
                        type: actionTypes.BUTTON,
                        text: determineQuizCardText(courseObject.task, results),
                        disabled: determineQuizCardIsDisabled(
                          courseObject.task
                        ),
                        action: () => {
                          history.push(
                            determineQuizCardLink(courseObject.task, results)
                          );
                        },
                      },
                    ]
                  : [
                      {
                        type: actionTypes.BUTTON,
                        text: 'View Lesson',
                        disabled: false,
                        action: () => {
                          history.push(
                            `/student/classes/${sectionId}/${viewSectionTabs.TIMELINE.value}/lessons/${courseObject.slug}/${courseObject.first_lesson_object.slug}`
                          );
                        },
                      },
                    ]
              }
              courseObject={courseObject}
              hasEvenPosition={index % 2 === 0}
              userType={GLOBALS.USER_TYPES.STUDENT}
            />
          )
        )}
      />
      {downloadCertificateButton && (
        <div
          className={styles.Timeline_buttonContainer}
          data-test="downloadCertificateButtonContainer"
        >
          {downloadCertificateButton}
        </div>
      )}
    </>
  );
};

Timeline.defaultProps = {
  downloadCertificateButton: null,
};

Timeline.propTypes = {
  courseDataId: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  section: PropTypes.object.isRequired,
  downloadCertificateButton: PropTypes.node,
};

const mapStateToProps = (store) => ({
  user: getUser(store),
});

export default connect(mapStateToProps, null)(Timeline);
