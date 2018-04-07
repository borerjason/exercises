import React from 'react';

import exercises from '../../../dummy_data/exercises';
import Timer from '../Timer';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseIndex: 0,
      sets: exercises[0].sets,
    };

    this.handleUpdateExerciseIndex = this.handleUpdateExerciseIndex.bind(this);
  }

  handleUpdateExerciseIndex() {
    const nextIndex = this.state.exerciseIndex + 1;
    if (exercises[nextIndex]) {
      this.setState({
        exerciseIndex: nextIndex,
        sets: exercises[nextIndex].sets,
      });
    }
  }
  render() {
    const { exerciseIndex } = this.state;
    console.log(exerciseIndex);
    return (
      <div>
        <Timer
          duration={exercises[exerciseIndex].duration}
          sets={this.state.sets}
          next={this.handleUpdateExerciseIndex}
        />
        <div></div>
      </div>
    );
  }
}

export default Display;
