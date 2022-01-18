import { useState, useEffect } from 'react';
import { AnswerCommentsService } from '../services';
import useInterval from './useInterval';

const useAnswerCommentCount = ({ answerId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [answerCommentsCount, setAnswerCommentsCount] = useState([]);

  const retrieveCount = async () => {
    const { data } = await AnswerCommentsService.count({
      answerId,
    });

    setAnswerCommentsCount(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (answerId) {
      retrieveCount();
    }
  }, [answerId]);

  useInterval(() => {
    retrieveCount();
  }, 10000);

  return {
    isLoading,
    answerCommentsCount,
  };
};

export default useAnswerCommentCount;
