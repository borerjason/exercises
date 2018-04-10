import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';
import dummyExercises from '../../../dummy_data/exercises';

export const initialState = fromJS({
  exercises: dummyExercises,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.STORE_EXERCISES:
      return action.payload;
    default:
      return state;
  }
}
