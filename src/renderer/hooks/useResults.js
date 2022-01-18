import { useState, useEffect } from 'react';

import { ResultsService } from '../services';

const useResults = ({ isExtended, params, isPaused = false }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const listResults = async () => {
      const {
        data: { results: retrievedResults },
      } = await ResultsService.list({ isExtended, params });

      setResults(retrievedResults);
      setIsLoading(false);
    };

    if (!isPaused) {
      listResults();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.keys(params).map((key) => params[key])]);

  return { isLoading, results };
};

export default useResults;
