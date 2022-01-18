import { isEqual } from 'lodash';
import { useState, useEffect } from 'react';

import { UsersV4Service } from '../services';
import useInterval from './useInterval';

const useUser = ({
  isExtended,
  userId,
  params,
  withLoading = true,
  isRecurring = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const retrieveUser = async () => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    if (withLoading) {
      setIsLoading(true);
    }

    const { data: retrievedUser } = await UsersV4Service.retrieve({
      isExtended,
      userId,
      params,
    });

    if (!isEqual(retrievedUser, user)) {
      setUser(retrievedUser);
    }

    if (withLoading) {
      setIsLoading(false);
    }
  };

  useInterval(retrieveUser, isRecurring ? 5000 : null);

  useEffect(() => {
    retrieveUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return { isLoading, user, refresh: retrieveUser };
};

export default useUser;
