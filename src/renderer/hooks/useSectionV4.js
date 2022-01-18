import { useState, useEffect } from 'react';

import { SectionsV4Service } from 'services';

const useSectionV4 = ({ sectionId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [section, setSection] = useState(null);
  const [callCount, setCallCount] = useState(0);

  useEffect(() => {
    if (!sectionId) {
      setIsLoading(false);
      return;
    }

    let isMounted = true;
    setIsLoading(true);
    setSection(null);

    SectionsV4Service.retrieve({
      sectionId,
    }).then(({ data: retrievedSection }) => {
      if (isMounted) {
        setSection(retrievedSection);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [sectionId, callCount]);

  return {
    isLoading,
    section,
    refresh: () => {
      setCallCount(callCount + 1);
    },
  };
};

export default useSectionV4;
