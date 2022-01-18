import { useState, useEffect } from 'react';
import { usePageVisibility } from 'react-page-visibility';
import { ExamUnwantedBehaviorTrackerService } from '../services';
import useFullScreenStatus from './useFullScreenStatus';

const useAnswerCheatingTracker = ({
  isEnabled,
  maximizableElement,
  result,
}) => {
  const isVisible = usePageVisibility();

  const [isFullScreenApproved, toggleIsFullScreenApproved] = useState(false);

  let isFullScreen = false;
  let isFullScreenChanging = false;
  let setIsFullScreen;
  try {
    [isFullScreen, isFullScreenChanging, setIsFullScreen] =
      useFullScreenStatus(maximizableElement);
  } catch (e) {
    // TODO: Log to the teacher that the fullscreen is not supported in the
    // browser of the student
    console.log('Fullscreen not supported');
  }

  // for switching tabs
  useEffect(() => {
    if (isEnabled) {
      const { exam_unwanted_behavior_tracker: examUnwantedBehaviorTracker } =
        result;

      // in addition to checking if the tab is not active anymore,
      // we also check if the full screen is not changing because if
      // if it is, the tab will actually be momentarily invisible
      // and will thus send an erroneous log
      if (!isVisible && !isFullScreenChanging && isFullScreenApproved) {
        // the user switched the active tab, so
        // we send an API request to log this behavior
        ExamUnwantedBehaviorTrackerService.updateCount({
          examUnwantedBehaviorTrackerId: examUnwantedBehaviorTracker.id,
          body: {
            field: 2, // switched_tab field
            value: 1, // increases the count by 1
          },
        });
      }
    }
  }, [isVisible]);

  // for closing full screen
  useEffect(() => {
    if (isEnabled) {
      const { exam_unwanted_behavior_tracker: examUnwantedBehaviorTracker } =
        result;

      if (!isFullScreen) {
        // the user cancelled the full screen, so
        // we send an API request to log this behavior
        ExamUnwantedBehaviorTrackerService.updateCount({
          examUnwantedBehaviorTrackerId: examUnwantedBehaviorTracker.id,
          body: {
            field: 1, // closed_fullscreen field
            value: 1, // increases the count by 1
          },
        });
      }
    }
  }, [isFullScreen]);

  return {
    isFullScreen,
    isFullScreenApproved,
    setIsFullScreen,
    toggleIsFullScreenApproved,
  };
};

export default useAnswerCheatingTracker;
