import { useState, useEffect, useCallback } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import moment from 'moment';
import {
  determineType,
  momentToDateTimeWithTimezone,
} from 'codechum-app-utils';
import GLOBALS from 'codechum-app-globals';
import { usePrevious } from 'hooks';
import {
  createCurrentLessonObjectStatus,
  getActiveLessonObjectStatuses,
  getOrCreateLessonObjectStatus,
  setDateTimeFinishedOfLessonObjectStatus,
  updateLessonObjectStatusDateTimeStarted,
} from '../utils';

/* eslint-disable camelcase */
const useStudentLessonObjectStatusManager = ({
  student,
  activeLesson,
  activeLessonObject,
  nextLessonObject,
  university,
}) => {
  const studentId = student.id;

  const [isLoading, setIsLoading] = useState(true);
  const [lessonObjectStatuses, setLessonObjectStatuses] = useState(null);
  const [
    isGettingOrCreatingLessonObjectStatus,
    setIsGettingOrCreatingLessonObjectStatus,
  ] = useState(false);

  const currentLessonObjectStatus = lessonObjectStatuses
    ? lessonObjectStatuses[activeLessonObject.order]
    : null;
  const nextLessonObjectStatus =
    lessonObjectStatuses && nextLessonObject
      ? lessonObjectStatuses[nextLessonObject.order]
      : null;
  const prevLessonObjectStatus = usePrevious(currentLessonObjectStatus);

  const createNextLessonObjectStatus = useCallback(
    async ({ datetimeStarted }) => {
      setIsGettingOrCreatingLessonObjectStatus(true);
      const lessonObjectStatus = await getOrCreateLessonObjectStatus({
        datetimeStarted,
        lessonObjectId: nextLessonObject.id,
        studentId,
      });

      const newLessonObjectStatuses = { ...lessonObjectStatuses };
      newLessonObjectStatuses[lessonObjectStatus.lesson_object.order] =
        lessonObjectStatus;
      setLessonObjectStatuses(newLessonObjectStatuses);

      setIsGettingOrCreatingLessonObjectStatus(false);
    },
    [lessonObjectStatuses, nextLessonObject, student]
  );

  // upon reaching the end of a Topic, we create the
  // next LessonStatus for the next LessonObject
  useBottomScrollListener(() => {
    const isNotLessonObjectActivity =
      determineType(activeLessonObject) !==
      GLOBALS.LESSON_OBJECT_TYPES.ACTIVITY;

    const canCreateNextLessonObjectStatus =
      // if the lesson object statuses array isn't empty and
      lessonObjectStatuses &&
      // we know the next lesson object and
      nextLessonObject &&
      // the active lesson object isn't an activity
      // (since, for activities, the next lesson object status should only be
      // created once the activity is finished) and
      isNotLessonObjectActivity &&
      // the next lesson object is in the lesson object statuses array and
      lessonObjectStatuses[nextLessonObject.order] == null &&
      // we aren't currently getting or creating any lesson object statuses
      !isGettingOrCreatingLessonObjectStatus;

    if (canCreateNextLessonObjectStatus) {
      createNextLessonObjectStatus({
        datetimeStarted: momentToDateTimeWithTimezone(moment()),
      });
    }
  }, 750);

  // if the active lesson doesn't have lesson object statuses yet
  // then we get them
  useEffect(() => {
    if (activeLesson && !lessonObjectStatuses) {
      getActiveLessonObjectStatuses({
        activeLesson,
        setIsLoading,
        setLessonObjectStatuses,
        studentId,
      });
    }
  }, [activeLesson]);

  // everytime the active lesson object changes, we get or create a
  // LessonObjectStatus for it
  useEffect(() => {
    if (!activeLessonObject || isLoading) {
      return;
    }
    window.scrollTo(0, 0);

    createCurrentLessonObjectStatus({
      activeLessonObject,
      lessonObjectStatuses,
      nextLessonObject,
      setLessonObjectStatuses,
      studentId,
      university,
    });
  }, [activeLessonObject, isLoading]);

  useEffect(() => {
    // if there was a previous lesson status, and the
    // student moved to the NEXT lesson, we set
    // its datetime finished
    if (
      prevLessonObjectStatus &&
      // if the order of the new current lesson status is greater
      // than the order of the prev lesson status
      currentLessonObjectStatus?.lesson_object?.order >
        prevLessonObjectStatus.lesson_object.order
    ) {
      setDateTimeFinishedOfLessonObjectStatus(prevLessonObjectStatus);
    }

    // if the currentLessonObjectStatus has no datetime_started yet, set it
    if (
      currentLessonObjectStatus &&
      !currentLessonObjectStatus.datetime_started
    ) {
      updateLessonObjectStatusDateTimeStarted(currentLessonObjectStatus);
    }
  }, [currentLessonObjectStatus]);

  return {
    createNextLessonObjectStatus,
    currentLessonObjectStatus,
    isLoading: isLoading || currentLessonObjectStatus == null,
    lessonObjectStatuses,
    nextLessonObjectStatus,
    setDateTimeFinishedOfLessonObjectStatus,
  };
};

export default useStudentLessonObjectStatusManager;
