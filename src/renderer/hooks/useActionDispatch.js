/* eslint-disable import/prefer-default-export */
import { useDispatch } from 'react-redux';

export const useActionDispatch = (action) => {
  const dispatch = useDispatch();

  const dispatchAction = (data = {}) => {
    dispatch(action(data));
  };

  return dispatchAction;
};
