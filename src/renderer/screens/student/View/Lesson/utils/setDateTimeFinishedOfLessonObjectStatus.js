import moment from 'moment';
import { momentToDateTimeWithTimezone } from 'codechum-app-utils';
import { LessonObjectStatusesService } from 'services';

const setDateTimeFinishedOfLessonObjectStatus = async (lessonObjectStatus) => {
  // we immediately exit if the lesson object status has a
  // datetime finished already
  if (lessonObjectStatus.datetime_finished) {
    return;
  }

  await LessonObjectStatusesService.update({
    lessonObjectStatusId: lessonObjectStatus.id,
    body: {
      datetime_finished: momentToDateTimeWithTimezone(moment()),
    },
  });
};

export default setDateTimeFinishedOfLessonObjectStatus;
