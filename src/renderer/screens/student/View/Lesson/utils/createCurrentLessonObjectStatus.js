import { isLessonObjectActivity } from 'codechum-app-utils';
import getOrCreateLessonObjectStatus from './getOrCreateLessonObjectStatus';

const createCurrentLessonObjectStatus = async ({
  activeLessonObject,
  lessonObjectStatuses,
  nextLessonObject,
  setLessonObjectStatuses,
  studentId,
  university,
}) => {
  if (!activeLessonObject) {
    return;
  }

  const lessonObjectStatus = await getOrCreateLessonObjectStatus({
    studentId,
    lessonObjectId: activeLessonObject.id,
  });
  const newLessonObjectStatuses = { ...lessonObjectStatuses };
  newLessonObjectStatuses[lessonObjectStatus.lesson_object.order] =
    lessonObjectStatus;

  if (
    isLessonObjectActivity(activeLessonObject) &&
    university?.preferences?.has_optional_lesson_activities
  ) {
    const nextLessonObjectStatus = await getOrCreateLessonObjectStatus({
      studentId,
      lessonObjectId: nextLessonObject.id,
    });
    newLessonObjectStatuses[nextLessonObjectStatus.lesson_object.order] =
      lessonObjectStatus;
  }

  setLessonObjectStatuses(newLessonObjectStatuses);
};

export default createCurrentLessonObjectStatus;
