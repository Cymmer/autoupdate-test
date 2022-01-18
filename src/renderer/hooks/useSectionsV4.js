import { useQuery } from 'react-query';

import { SectionsV4Service } from '../services';

const useSectionsV4 = ({ isExtended, params }) =>
  useQuery(
    'sections',
    () =>
      SectionsV4Service.list({
        isExtended,
        params: { ...params, isOnboarding: false },
      }),
    {
      refetchOnWindowFocus: false,
      select: (query) => query.data.results,
    }
  );

export default useSectionsV4;
