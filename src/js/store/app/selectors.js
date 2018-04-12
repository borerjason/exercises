import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

// export const foo = state => state.getIn(['app', 'foo']);
const selectExercises = state => state.exercises;

export const makeExercises = () => createSelector(
  selectExercises,
)
export const bar = () => {
  return createSelector(
    [foo],
    (foo) => {
      return foo.map(a => a.get('someValue'));
    }
  );
};


// const getExercises = createSelector(
//   // pass list of functions that generates new state
//   state => state.exercises,
//   // last function receives values of each of the selectors
//   exercises => exercises,
// );

// const mapStateToProps = state => (
//   { exercises: getExercises(state) }
// );