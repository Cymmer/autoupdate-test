import { LessonObjectStatusesService } from 'services';

const getOrCreateLessonObjectStatus = async ({
  datetimeStarted,
  lessonObjectId = null,
  studentId,
}) => {
  // get or create new lesson status for this current lesson object
  const { data: lessonObjectStatus } =
    await LessonObjectStatusesService.compounded.getOrCreate({
      isExtended: true,
      params: {
        datetimeStarted,
        lessonObjectId,
        studentId,
      },
    });

  return lessonObjectStatus;
};

export default getOrCreateLessonObjectStatus;
