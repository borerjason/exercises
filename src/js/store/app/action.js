import * as actionTypes from './actionTypes';

export function storeExercises(exercises) {
  return {
    type: actionTypes.STORE_EXERCISES,
    payload: { exercises },
  };
}

export function updateCurrentExercise(currIndex) {
  return {
    type: actionTypes.UPDATE_EXERCISE,
    payload: { currIndex },
  };
}
