/**
 * Summary: decrements timer state by one.
 */
export function decrementTimeByOne() {
  this.setState({ time: this.state.time - 1 });
}

/**
 * Summary: updates currIndex in store to next index.
 */
export function nextExercise() {
  const { currIndex, all } = this.props.exercises;

  if (currIndex < all.length - 1) {
    const nextIndex = currIndex + 1;
    this.props.updateCurrIndex(nextIndex);
  }
}

export function nextSet() {
  const { duration } = this.props;

  this.setState({
    time: duration,
    buffer: false,
    setsLeft: this.state.setsLeft - 1,
  }, this.startTimer);
}

export function startBuffer() {
  this.setState({ time: 2, buffer: true }, this.startTimer);
}
