/**
 * This is to manage the hotkey functionalities for this component.
 */

import { useKeyPress } from 'hooks';
import { useEffect } from 'react';

const useHotkeys = ({ runCodeAction }) => {
  const f10KeyPressed = useKeyPress('F10');

  useEffect(() => {
    if (f10KeyPressed && runCodeAction) {
      runCodeAction();
    }
  }, [f10KeyPressed]);
};

export default useHotkeys;
