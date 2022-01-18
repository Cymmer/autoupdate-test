import { useState, useEffect } from 'react';

import { LessonObjectStatusesService } from '../services';

const useLessonObjectStatusExist = ({ params }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [doesExist, toggleDoesExist] = useState(false);

  const checkLessonObjectStatusExist = async () => {
    // these 2 params are required
    if (!params.sectionId && !params.lessonObjectId) {
      return;
    }

    const { data: retrievedDoesExist } =
      await LessonObjectStatusesService.exists({
        params,
      });

    toggleDoesExist(retrievedDoesExist);

    setIsLoading(false);
  };

  useEffect(() => {
    checkLessonObjectStatusExist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.keys(params).map((key) => params[key])]);

  return { isLoading, doesExist };
};

export default useLessonObjectStatusExist;
