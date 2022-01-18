import { useState, useEffect } from 'react';

import { AnswerCommentsService } from '../services';

const useAnswerComments = ({ answerId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [answerComments, setAnswerComments] = useState([]);
  const [callCount, setCallCount] = useState(0);

  useEffect(() => {
    if (!answerId) {
      setIsLoading(false);
      return;
    }

    let isMounted = true;
    setIsLoading(true);
    AnswerCommentsService.list({ answerId }).then(({ data: { results } }) => {
      if (isMounted) {
        setAnswerComments(results);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [answerId, callCount]);

  return {
    isLoading,
    answerComments,
    refresh: () => {
      setCallCount(callCount + 1);
    },
  };
};

export default useAnswerComments;
