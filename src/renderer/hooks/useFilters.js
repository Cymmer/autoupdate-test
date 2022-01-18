import { useState } from 'react';

import GLOBALS from 'codechum-app-globals';

const useFilters = ({
  initialValues: { searchString, sortValue, filterValues } = {},
} = {}) => {
  const [filters, setFilters] = useState({
    [GLOBALS.FILTER_KEYS.SEARCH_STRING]: searchString || '',
    [GLOBALS.FILTER_KEYS.SORT_VALUE]: sortValue || null,
    [GLOBALS.FILTER_KEYS.FILTER_VALUES]: filterValues || [],
  });

  /**
   * creates a value for the filter with the associated `name` required
   * by the API endpoint that's going to be used
   *
   * @param {String} name - the name required by the API endpoint
   * @param {String|Number} value - the value of this filter
   * @return {String} the combined name and value string (FORMAT: <name>-<value>)
   */
  const generateFilterValueWithName = (name, value) => `${name}%${value}`;

  /**
   * extracts the values from the array of combined filter values
   *
   * @param {String[]} filterValues - an array of combined filter values (FORMAT: <name>-<value>)
   * @param {String} name - the name required by the API endpoint
   * @return {String[]} an array of values
   */
  const extractValuesFromFilterByName = (name) =>
    filters[GLOBALS.FILTER_KEYS.FILTER_VALUES]
      ? filters[GLOBALS.FILTER_KEYS.FILTER_VALUES]
          // 1. split the concatenated filterValue
          .map((filterValue) => filterValue.value.split('%'))

          // 2. filter the values that match the passed parameter `name`
          .filter((filterValue) => filterValue[0] === name)

          // 3. extract the 2nd values in the split string from step 1
          //    because we only need the actual values
          .map((filterValue) => filterValue[1])
      : [];

  return {
    filters,
    setFilters,
    generateFilterValueWithName,
    extractValuesFromFilterByName,
  };
};

export default useFilters;
