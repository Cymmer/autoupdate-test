import { getFileName } from 'codechum-app-utils';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { generateInitialSourceCode } from '../screens/common/Answer/helpers';
import { ProgrammingLanguagesService } from '../services';

const createDummyTask = (programmingLanguages) => {
  const startTime = moment();
  const endTime = moment().add(100, 'days');

  const task = {
    id: 1,
    name: 'Playground',
    max_score: 1,
    start_time: startTime,
    end_time: endTime,
    programming_language_ids: programmingLanguages.map((pl) => pl.id),
    questions: [
      {
        id: 1,
        max_score: 1,
        task_id: 1,
      },
    ],
    time_before_start: 0,
    time_before_end: moment.duration(endTime.diff(startTime)).asSeconds(),
    status: 'present',
    programming_languages: programmingLanguages,
  };

  return task;
};

const createDummyResult = (task) => {
  const result = {
    id: 1,
    datetime_started: moment(),
    datetime_submitted: null,
    score: 0,
    is_practice: false,
    task_id: task.id,
    time: 0,
    answers: task.questions.map((question, index) => {
      const firstProgrammingLanguage = task.programming_languages.find(
        (pl) => pl.id === task.programming_language_ids[0]
      );

      return {
        id: index + 1,
        score: 0,
        number: index + 1,
        time: 0,
        datetime_submitted: null,
        question_id: question.id,
        result_id: 1,
        programming_language_id: task.programming_language_ids[0],
        programming_language: task.programming_languages[0],
        question,
        source_codes: [
          {
            id: 1,
            answer_id: index + 1,
            programming_language_id: firstProgrammingLanguage.id,
            code: generateInitialSourceCode(firstProgrammingLanguage.id),
            programming_language: firstProgrammingLanguage,
            file_name: getFileName(firstProgrammingLanguage.extension),
            file_extension: firstProgrammingLanguage.extension,
          },
        ],
      };
    }),
  };

  return result;
};

/* eslint-disable camelcase */
const usePlayground = ({ programmingLanguages, cachedResult }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [task, setTask] = useState(null);
  const [result, setResult] = useState(null);

  const initializePlayground = async () => {
    setIsLoading(true);

    let recentlyRetrievedLanguages = null;
    if (!programmingLanguages) {
      const {
        data: { results },
      } = await ProgrammingLanguagesService.list();
      recentlyRetrievedLanguages = results;
    }

    const dummyTask = createDummyTask(
      recentlyRetrievedLanguages || programmingLanguages
    );

    const dummyResult = cachedResult || createDummyResult(dummyTask);

    setResult(dummyResult);
    setTask(dummyTask);

    setIsLoading(false);
  };

  useEffect(() => {
    initializePlayground();
  }, []);

  return {
    isLoading,
    task,
    result,
  };
};

export default usePlayground;
