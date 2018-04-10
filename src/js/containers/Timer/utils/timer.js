// logic for exercises

// state

export function decrementTimeByOne() {
  this.setState({ time: this.state.time - 1 });
}

export function nextExercise() {
  if (this.props.exercises.currIndex < this.props.exercises.all.length - 1) {
    const nextIndex = this.props.exercises.currIndex + 1;
    this.props.updateCurrIndex(nextIndex);
    this.setState({
      time: this.props.exercises.all[this.props.exercises.currIndex].duration,
      setsLeft: this.props.exercises.all[this.props.exercises.currIndex].sets,
    }, this.timer());
  }
}

export function nextSet() {
  const currExercise = this.props.exercises.all[this.props.exercises.currIndex];
  this.setState({ time: currExercise.duration, buffer: false, setsLeft: this.state.setsLeft - 1 }, this.timer);
}

export function startBuffer() {
  this.setState({ time: 1, buffer: true }, this.timer);
}
