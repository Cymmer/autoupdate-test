import { useState, useEffect } from 'react';

import { UniversitiesService } from '../services';

const useUniversity = ({ universityId, isPaused = false }) => {
  const [isLoading, setIsLoading] = useState(isPaused === false);
  const [university, setUniversity] = useState(null);

  const retrieveUniversity = async () => {
    setIsLoading(true);
    const { data: retrievedUniversity } = await UniversitiesService.retrieve({
      universityId,
    });

    setUniversity(retrievedUniversity);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!universityId || isPaused) {
      return;
    }

    retrieveUniversity();
  }, [universityId, isPaused]);

  return { isLoading, university };
};

export default useUniversity;
