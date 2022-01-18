import { useState, useEffect } from 'react';
import { useInterval, usePrevious, useWindowUnload } from '.';
import { AnswersService } from '../services';

const useAnswerSaveTimeSpent = ({ answer, updateAnswer, isSaving }) => {
  const [notPersistedTimeSpent, setNotPersistedTimeSpent] = useState(0);
  const prevAnswer = usePrevious(answer);

  useInterval(() => {
    if (!isSaving || !answer) {
      return;
    }

    updateAnswer({
      time: answer.time + 1,
    });
    setNotPersistedTimeSpent(notPersistedTimeSpent + 1);
  }, 1000);

  useEffect(() => {
    if (!isSaving || !prevAnswer) {
      return;
    }

    setNotPersistedTimeSpent(0);

    // everytime the answer changes, we persist the
    // time spent attribute of the PREVIOUS Answer to the DB
    AnswersService.update({
      answerId: prevAnswer.id,
      body: {
        time: prevAnswer.time,
      },
    });
  }, [answer?.id]);

  useEffect(() => {
    if (!isSaving) {
      return;
    }

    if (notPersistedTimeSpent > 10) {
      // if the not persisted time spent is already greater
      // than 10 seconds, we persist the current time
      AnswersService.update({
        answerId: answer.id,
        body: {
          time: answer.time,
        },
      });
      setNotPersistedTimeSpent(0);
    }
  }, [notPersistedTimeSpent]);

  useWindowUnload(() => {
    if (!isSaving || !answer) {
      return;
    }

    // upon leaving the screen, we persist the time spent
    // attribute of the Answer to the DB
    AnswersService.update({
      answerId: answer.id,
      body: {
        time: answer.time,
      },
    });
  }, true);
};

export default useAnswerSaveTimeSpent;
