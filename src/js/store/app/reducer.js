import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const initialState = fromJS({
  foo: {},
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.MY_ACTION:
      // return something
    default:
      return state;
  }
}
