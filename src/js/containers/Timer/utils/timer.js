// logic for exercises

// state

export function decrementTimeByOne() {
  this.setState({ time: this.state.time - 1 });
}

/**
 * Summary: updates currIndex in store to next index.
 */
export const nextExercise = () => {
  const { currIndex, all } = this.props.exercises;

  if (currIndex < all.length - 1) {
    const nextIndex = currIndex + 1;
    this.props.updateCurrIndex(nextIndex);
    this.setState({
      time: all[currIndex].duration,
      setsLeft: all[currIndex].sets,
    }, this.timer());
  }
};

export function nextSet() {
  const currExercise = this.props.exercises.all[this.props.exercises.currIndex];
  this.setState({ time: currExercise.duration, buffer: false, setsLeft: this.state.setsLeft - 1 }, this.timer);
}

export function startBuffer() {
  this.setState({ time: 1, buffer: true }, this.timer);
}
