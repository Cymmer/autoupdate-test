import { useState, useEffect, useLayoutEffect } from 'react';

const getBrowserFullScreenElementProp = () => {
  if (typeof document.fullscreenElement !== 'undefined') {
    return 'fullscreenElement';
  }
  if (typeof document.mozFullScreenElement !== 'undefined') {
    return 'mozFullScreenElement';
  }
  if (typeof document.msFullscreenElement !== 'undefined') {
    return 'msFullscreenElement';
  }
  if (typeof document.webkitFullscreenElement !== 'undefined') {
    return 'webkitFullscreenElement';
  }
  throw new Error('fullscreenElement is not supported by this browser');
};

const useFullScreenStatus = (elRef) => {
  const [isFullScreen, setIsFullScreen] = useState(
    document[getBrowserFullScreenElementProp()] != null
  );
  const [isFullScreenChanging, setIsFullScreenChanging] = useState(false);

  const fullScreenSuccess = () => {
    setIsFullScreen(document[getBrowserFullScreenElementProp()] != null);
  };
  const fullScreenError = () => {
    setIsFullScreen(false);
  };

  const setFullScreen = () => {
    const element = elRef.current;

    if (element == null) return;

    setIsFullScreenChanging(true);

    if (element.requestFullscreen) {
      element
        .requestFullscreen()
        .then(fullScreenSuccess)
        .catch(fullScreenError);
    } else if (element.mozRequestFullScreen) {
      element
        .mozRequestFullScreen()
        .then(fullScreenSuccess)
        .catch(fullScreenError);
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  };

  useEffect(() => {
    if (isFullScreenChanging) {
      setTimeout(() => {
        setIsFullScreenChanging(false);
      }, 2000);
    }
  }, [isFullScreenChanging]);

  useLayoutEffect(() => {
    document.onfullscreenchange = () => {
      setIsFullScreenChanging(true);
      setIsFullScreen(document[getBrowserFullScreenElementProp()] != null);
    };
    document.onwebkitfullscreenchange = () => {
      setIsFullScreenChanging(true);
      setIsFullScreen(document[getBrowserFullScreenElementProp()] != null);
    };

    return () => {
      document.onfullscreenchange = undefined;
      document.onwebkitfullscreenchange = undefined;
    };
  });

  return [isFullScreen, isFullScreenChanging, setFullScreen];
};

export default useFullScreenStatus;
