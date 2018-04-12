import * as actionTypes from './actionTypes';

export const storeExercises = exercises => ({
  type: actionTypes.STORE_EXERCISES,
  payload: { exercises },
});

export const updateCurrentExercise = currIndex => ({
  type: actionTypes.UPDATE_EXERCISE,
  payload: { currIndex },
});
