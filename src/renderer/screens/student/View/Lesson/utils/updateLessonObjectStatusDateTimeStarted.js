import moment from 'moment';
import { momentToDateTimeWithTimezone } from 'codechum-app-utils';
import { LessonObjectStatusesService } from 'services';

const updateLessonObjectStatusDateTimeStarted = async (currentLessonStatus) => {
  await LessonObjectStatusesService.update({
    lessonObjectStatusId: currentLessonStatus.id,
    body: {
      datetime_started: momentToDateTimeWithTimezone(moment()),
    },
  });
};

export default updateLessonObjectStatusDateTimeStarted;
