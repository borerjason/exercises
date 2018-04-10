import * as actionTypes from './actionTypes';

export default function storeExercises(exercises) {
  return {
    type: actionTypes.STORE_EXERCISES,
    payload: { exercises },
  };
}
