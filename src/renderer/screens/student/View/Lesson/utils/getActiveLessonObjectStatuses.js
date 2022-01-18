import { LessonObjectStatusesService } from 'services';

const getActiveLessonObjectStatuses = async ({
  activeLesson,
  setIsLoading,
  setLessonObjectStatuses,
  studentId,
}) => {
  setIsLoading(true);
  LessonObjectStatusesService.list({
    isExtended: true,
    params: {
      lessonObjectIds: activeLesson?.lesson_objects
        ?.map((lessonObject) => lessonObject.id)
        .join(','),
      studentId,
    },
  }).then(({ data: { results: retrievedLessonObjectStatuses } }) => {
    setLessonObjectStatuses(
      retrievedLessonObjectStatuses.reduce((acc, curr) => {
        acc[curr.lesson_object.order] = curr;
        return acc;
      }, {})
    );
    setIsLoading(false);
  });
};

export default getActiveLessonObjectStatuses;
