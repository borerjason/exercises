import * as actionTypes from './actionTypes';

export function myAction(foo) {
  return {
    type: actionTypes.MY_ACTION,
    payload: { foo },
  };
} 
