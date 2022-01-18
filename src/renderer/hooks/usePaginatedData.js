/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  generateNewCachedData,
  getDataForCurrentPage,
  indexHasCachedData,
} from 'codechum-app-utils';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const usePaginatedData = ({
  service,
  serviceParams: { isExtended, baseParams, filterParams, ...restServiceParams },
  pageSize,
  listWrapperRef = null,
  newDataTracker = [],
  isPaused = false,
}) => {
  const [allData, setAllData] = useState(null);
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [hasUnfilteredData, setHasUnfilteredData] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState(null);

  const [previousNewDataTracker, setPreviousNewDataTracker] =
    useState(newDataTracker);
  const [hasNewUnloadedData, setHasNewUnloadedData] = useState(false);

  const [debouncedServiceCall] = useDebouncedCallback(() => {
    setCurrentPageData(null);

    service({
      isExtended,
      params: {
        ...baseParams,
        ...filterParams,
        page: currentPage,
        pageSize,
      },
      ...restServiceParams,
    }).then(({ data: { results: toBeAddedData, count } }) => {
      setTotalDataCount(count);
      setAllData(
        generateNewCachedData({
          existingData: allData,
          toBeAddedData,
          index: (currentPage - 1) * pageSize,
        })
      );

      if (hasUnfilteredData === null) {
        setHasUnfilteredData(count > 0);
      }
    });
  }, 800);

  const resetData = () => {
    // reset all existing data
    setAllData(null);
    setTotalDataCount(0);

    // then reset the page back to 1
    setCurrentPage(1);

    debouncedServiceCall();
  };

  // on mount, call the service right away
  useEffect(() => {
    if (!isPaused) {
      debouncedServiceCall();
    }
  }, [isPaused]);

  // on page update, call the service if there's
  // no data on the current page yet
  useEffect(() => {
    if (isPaused) {
      return;
    }

    if (
      !indexHasCachedData({
        existingData: allData,
        index: (currentPage - 1) * pageSize,
      })
    ) {
      debouncedServiceCall();
    } else {
      setCurrentPageData(
        getDataForCurrentPage({
          data: allData,
          currentPage,
          pageSize,
        })
      );
    }
  }, [currentPage]);

  // on filter update or base params update, reset the data
  useEffect(() => {
    if (allData !== null && !isPaused) {
      resetData();
    }
  }, [...Object.keys(filterParams).map((key) => filterParams[key])]);

  // everytime the `allData` changes, we make sure that the
  // `currentPageData` is updated as well
  useEffect(() => {
    setCurrentPageData(
      getDataForCurrentPage({
        data: allData,
        currentPage,
        pageSize,
      })
    );
  }, [allData]);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    if (previousNewDataTracker.length !== newDataTracker.length) {
      if (currentPage !== 1) {
        setHasNewUnloadedData(true);
      } else {
        // reset all existing data
        resetData();
      }

      setPreviousNewDataTracker(newDataTracker);
    }
  }, [newDataTracker]);

  // we create a wrapper function to be able to reset the
  // `currentPageData` before switching to another page
  const setCurrentPageWrapper = (newCurrentPage) => {
    // add a trap to not do anything if the newCurrentPage
    // is just equal to the currentPage
    if (newCurrentPage === currentPage) {
      return;
    }

    if (listWrapperRef) {
      window.scrollTo(0, listWrapperRef.current.offsetTop);
    }

    if (newCurrentPage === 1 && hasNewUnloadedData) {
      setHasNewUnloadedData(false);
      setAllData(null);
    }

    setCurrentPageData(null);
    setCurrentPage(newCurrentPage);
  };

  return {
    currentPageData,
    currentPage,
    totalPages: totalDataCount ? Math.ceil(totalDataCount / pageSize) : null,
    hasUnfilteredData,
    hasNewUnloadedData,
    isLoading: currentPageData === null,
    setCurrentPage: setCurrentPageWrapper,
    resetData,
  };
};

export default usePaginatedData;
