import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';
import dummyExercises from '../../../dummy_data/exercises';

// do this later with selectors
// export const initialState = fromJS({
//   exercises: dummyExercises,
// });

const initialState = { all: dummyExercises, currIndex: 0 };

export default function reducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case actionTypes.STORE_EXERCISES:
      return action.payload;
    case actionTypes.UPDATE_EXERCISE:
      return {
        all: state.all,
        currIndex: action.payload.currIndex,
      };
    default:
      return state;
  }
}
