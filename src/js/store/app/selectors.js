import { createSelector } from 'reselect';

const exerciseSelector = state => state.exercises.all;
const indexSelector = state => state.exercises.currIndex;

const getCurrentExercise = (exercises, index) => exercises[index];

export default createSelector(exerciseSelector, indexSelector, getCurrentExercise);
