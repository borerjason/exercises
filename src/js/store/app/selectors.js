import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

export const foo = state => state.getIn(['app', 'foo']);

export const bar = () => {
  return createSelector(
    [foo],
    (foo) => {
      return foo.map(a => a.get('someValue'));
    }
  );
};
