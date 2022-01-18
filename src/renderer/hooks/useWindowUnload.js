/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react';

const useWindowUnload = (handler, callOnCleanup) => {
  const cb = useRef();

  cb.current = handler;

  useEffect(() => {
    const newHandler = () => cb.current();

    window.addEventListener('beforeunload', newHandler);

    return () => {
      if (callOnCleanup) newHandler();

      window.removeEventListener('beforeunload', newHandler);
    };
  }, [cb]);
};

export default useWindowUnload;
