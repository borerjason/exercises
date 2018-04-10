import * as actionTypes from './actionTypes';

export default function storeExercises(exercises) {
  console.log('excersices action', exercises);
  return {
    type: actionTypes.STORE_EXERCISES,
    payload: { exercises },
  };
}
