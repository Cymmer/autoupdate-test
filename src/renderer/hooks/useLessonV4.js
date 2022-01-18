import { useState, useEffect } from 'react';

import { LessonsV4Service } from '../services';

const useLessonV4 = ({ isExtended, lessonSlug, courseDataId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    if (!courseDataId || !lessonSlug) {
      return;
    }

    let isMounted = true;
    setIsLoading(true);

    LessonsV4Service.retrieve({
      isExtended,
      lessonSlug,
      courseDataId,
    }).then(({ data }) => {
      if (isMounted) {
        setLesson(data);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [lessonSlug, courseDataId]);

  return { isLoading, lesson };
};

export default useLessonV4;
