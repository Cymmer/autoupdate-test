import { useQuery } from 'react-query';

import { SectionsV4Service } from '../services';

const useSection = ({ isExtended, sectionId }) =>
  useQuery(
    ['sections', sectionId],
    () =>
      SectionsV4Service.retrieve({
        isExtended,
        sectionId,
      }),
    {
      enabled: !!sectionId,
      refetchOnWindowFocus: false,
      select: (query) => query.data,
    }
  );

export default useSection;
