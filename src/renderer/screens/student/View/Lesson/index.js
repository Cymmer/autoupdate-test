import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Switch, Route, useHistory } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { useLessonV4, useSection, useUniversity } from 'hooks';
import {
  determineType,
  momentToDateTimeWithTimezone,
} from 'codechum-app-utils';
import { LessonObjectStatusesService } from 'services';
import { getUser } from 'ducks';
import { ScreenLoader } from 'components/elements';
import GLOBALS from 'codechum-app-globals';

import styles from 'screens/common/View/Lesson/styles.module.scss';
import AnswerLessonActivity from 'screens/common/Answer/child-screens/AnswerLessonActivity';
import Sidebar from 'screens/common/View/Lesson/Sidebar';
import Navigation from 'screens/common/View/Lesson/Navigation';
import CoverSlides from 'screens/common/View/Lesson/CoverSlides';
import Topic from 'screens/common/View/Lesson/Topic';
import Summary from 'screens/common/View/Lesson/Summary';

import useStudentLessonObjectStatusManager from './hooks/useStudentLessonObjectStatusManager';
import { viewSectionTabs } from '../../constants';

/* eslint-disable camelcase */
export const Lesson = ({
  match: {
    params: {
      sectionId,
      lessonSlug,
      lessonObjectSlug: pathLessonObjectSlug,
      activeTab,
    },
  },
  user: student,
}) => {
  useEffect(() => {
    document.body.classList.add('lessonContainer');

    return () => {
      document.body.classList.remove('lessonContainer');
    };
  }, []);

  const history = useHistory();

  const [isSidebarToggled, toggleSidebar] = useState(false);

  const { isLoading: isSectionLoading, data: section } = useSection({
    isExtended: true,
    sectionId,
  });

  const { isLoading: isLessonLoading, lesson: activeLesson } = useLessonV4({
    isExtended: true,
    lessonSlug,
    courseDataId: section?.course_data_id,
  });

  const { isLoading: isUniversityLoading, university } = useUniversity({
    universityId: student.university_id,
  });

  const activeLessonObject = activeLesson?.lesson_objects?.find(
    (lessonObject) => lessonObject.slug === pathLessonObjectSlug
  );

  // 1-based
  const prevLessonObject = activeLesson
    ? activeLesson.lesson_objects[activeLessonObject.order - 2]
    : null;
  const nextLessonObject = activeLesson
    ? activeLesson.lesson_objects[activeLessonObject.order]
    : null;

  const {
    lessonObjectStatuses,
    currentLessonObjectStatus,
    nextLessonObjectStatus,
    isLoading: areLessonObjectStatusesLoading,
    createNextLessonObjectStatus,
    setDateTimeFinishedOfLessonObjectStatus,
  } = useStudentLessonObjectStatusManager({
    student,
    activeLesson,
    activeLessonObject,
    nextLessonObject,
    university,
  });

  if (
    isSectionLoading ||
    isLessonLoading ||
    areLessonObjectStatusesLoading ||
    (student.university_id && isUniversityLoading)
  ) {
    return <ScreenLoader />;
  }

  const generateLessonObjectLink = (lessonObject) =>
    determineType(lessonObject) === GLOBALS.LESSON_OBJECT_TYPES.ACTIVITY
      ? `/student/classes/${sectionId}/${viewSectionTabs.TIMELINE.value}/lessons/${lessonSlug}/${lessonObject.slug}/question/1/`
      : `/student/classes/${sectionId}/${viewSectionTabs.TIMELINE.value}/lessons/${lessonSlug}/${lessonObject.slug}/`;

  return (
    <>
      <Sidebar
        activeLessonObject={activeLessonObject}
        isSidebarToggled={isSidebarToggled}
        lessonObjectsJsx={activeLesson.lesson_objects.map(
          (lessonObject, index) => (
            <Sidebar.LessonObject
              key={lessonObject.id}
              isActive={lessonObject.slug === pathLessonObjectSlug}
              isShapeFilled={index + 1 <= activeLessonObject.order}
              isToggled={isSidebarToggled}
              link={generateLessonObjectLink(lessonObject)}
              state={
                lessonObjectStatuses[lessonObject.order]
                  ? GLOBALS.LESSON_OBJECT_STATES.UNLOCKED
                  : GLOBALS.LESSON_OBJECT_STATES.LOCKED
              }
              text={lessonObject?.task?.name || lessonObject.title}
              type={determineType(lessonObject)}
            />
          )
        )}
        lessonObjectStatuses={lessonObjectStatuses}
        toggleSidebar={toggleSidebar}
        totalLessonObjects={activeLesson.lesson_objects.length}
      />

      <div
        className={cn(styles.Lesson_container, {
          [styles.Lesson_container___toggled]: isSidebarToggled,
        })}
        data-test="lessonContainer"
      >
        {/* TOPIC */}
        {determineType(activeLessonObject) !==
          GLOBALS.LESSON_OBJECT_TYPES.ACTIVITY && (
          <>
            {activeLesson.is_introduction || activeLesson?.is_summary ? (
              <CoverSlides
                course={section.course}
                lesson={activeLesson}
                lessonObject={activeLessonObject}
                nextAction={() => {
                  setDateTimeFinishedOfLessonObjectStatus(
                    currentLessonObjectStatus
                  );
                  if (
                    activeLesson.is_introduction &&
                    activeLessonObject?.is_summary
                  ) {
                    // in order to refresh the lesson object statuses, we do a
                    // redirect with refresh
                    LessonObjectStatusesService.create({
                      body: {
                        datetime_started: momentToDateTimeWithTimezone(
                          moment()
                        ),
                        lesson_object_id:
                          activeLesson.next_lesson.first_lesson_object.id,
                        student_id: student.id,
                      },
                    }).then(() => {
                      window.location.href = `/student/classes/${sectionId}/${viewSectionTabs.TIMELINE.value}/lessons/${activeLesson.next_lesson.slug}/${activeLesson.next_lesson.first_lesson_object.slug}`;
                    });
                  } else if (
                    activeLesson?.is_summary &&
                    activeLessonObject?.is_summary
                  ) {
                    history.push(
                      `/student/classes/${sectionId}/${viewSectionTabs.TIMELINE.value}/`
                    );
                  } else {
                    history.push(generateLessonObjectLink(nextLessonObject));
                  }
                }}
                sectionId={sectionId}
                studentId={student.id}
              />
            ) : (
              <>
                {determineType(activeLessonObject) ===
                  GLOBALS.LESSON_OBJECT_TYPES.TOPIC && (
                  <Topic
                    course={section.course}
                    lesson={activeLesson}
                    lessonObject={activeLessonObject}
                  />
                )}

                {determineType(activeLessonObject) ===
                  GLOBALS.LESSON_OBJECT_TYPES.SUMMARY && (
                  <Summary
                    activeTab={activeTab}
                    baseLink={`/student/classes/${sectionId}/${viewSectionTabs.TIMELINE.value}/lessons/${activeLesson.slug}/${activeLessonObject.slug}`}
                    baseRoute={`/student/classes/:sectionId/${viewSectionTabs.TIMELINE.value}/lessons/:lessonSlug/:lessonObjectSlug`}
                    course={section.course}
                    courseTimelineLink={`/student/classes/${sectionId}/${viewSectionTabs.TIMELINE.value}`}
                    lesson={activeLesson}
                  />
                )}
              </>
            )}
          </>
        )}

        {/* ACTIVITY */}
        {determineType(activeLessonObject) ===
          GLOBALS.LESSON_OBJECT_TYPES.ACTIVITY && (
          <Switch>
            <Route
              name="Answer Lesson Activity"
              path={`/student/classes/:sectionId/${viewSectionTabs.TIMELINE.value}/lessons/:lessonSlug/:lessonObjectSlug/question/:questionNumber/`}
              render={(props) => (
                <AnswerLessonActivity
                  lesson={{
                    id: activeLesson.id,
                    title: activeLesson.title,
                  }}
                  nextLessonObjectLink={generateLessonObjectLink(
                    nextLessonObject
                  )}
                  taskId={activeLessonObject.task.id}
                  onSuccessfullyAnsweredAllProblems={() => {
                    setDateTimeFinishedOfLessonObjectStatus(
                      currentLessonObjectStatus
                    );

                    if (nextLessonObject) {
                      createNextLessonObjectStatus({
                        datetimeStarted: momentToDateTimeWithTimezone(moment()),
                      });
                    }
                  }}
                  {...props}
                />
              )}
            />
          </Switch>
        )}

        {determineType(activeLessonObject) !==
          GLOBALS.LESSON_OBJECT_TYPES.ACTIVITY &&
          !activeLesson.is_introduction &&
          !activeLesson?.is_summary && (
            <Navigation
              nextAction={{
                action:
                  nextLessonObjectStatus != null ||
                  activeLessonObject?.is_summary
                    ? () => {
                        setDateTimeFinishedOfLessonObjectStatus(
                          currentLessonObjectStatus
                        );
                        if (
                          activeLesson.next_lesson?.is_summary &&
                          activeLessonObject?.is_summary
                        ) {
                          window.location.href = `/student/classes/${sectionId}/${viewSectionTabs.TIMELINE.value}/lessons/${activeLesson.next_lesson.slug}/${activeLesson.next_lesson.first_lesson_object.slug}`;
                        } else {
                          history.push(
                            nextLessonObjectStatus != null
                              ? generateLessonObjectLink(nextLessonObject)
                              : `/student/classes/${sectionId}/${viewSectionTabs.TIMELINE.value}/`
                          );
                        }
                      }
                    : null,
                text: nextLessonObject ? 'Next' : 'Finish',
              }}
              prevAction={{
                action: prevLessonObject
                  ? () =>
                      history.push(generateLessonObjectLink(prevLessonObject))
                  : null,
                text: 'Prev',
              }}
              title={activeLessonObject?.task?.name || activeLessonObject.title}
            />
          )}
      </div>
    </>
  );
};

Lesson.propTypes = {
  match: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (store) => ({
  user: getUser(store),
});

export default connect(mapStateToProps, null)(Lesson);
