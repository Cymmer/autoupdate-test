import { useState, useEffect } from 'react';

import { CourseDataV4Service } from 'services';

const useCourseDataV4 = ({ courseDataId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [courseData, setCourseData] = useState(null);
  const [callCount, setCallCount] = useState(0);

  useEffect(() => {
    if (!courseDataId) {
      setIsLoading(false);
      return;
    }

    let isMounted = true;
    setIsLoading(true);

    CourseDataV4Service.retrieve({
      courseDataId,
    }).then(({ data }) => {
      if (isMounted) {
        setCourseData(data);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [courseDataId, callCount]);

  return {
    isLoading,
    courseData,
    refresh: () => {
      setCallCount(callCount + 1);
    },
  };
};

export default useCourseDataV4;
