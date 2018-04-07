import React from 'react';

import exercises from '../../../dummy_data/exercises';
import Timer from '../Timer';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseIndex: 0,
      setsLeft: exercises[0].sets,
    };
  }

  handleUpdateExerciseIndex() {
    const nextIndex = this.state.exerciseIndex + 1;
    if (exercises[nextIndex]) {
      this.setState({
        exerciseIndex: nextIndex,
        setsLeft: exercises[nextIndex].sets,
      });
    }
  }
  render() {
    const { exerciseIndex } = this.state;
    console.log(exercises);
    return (
      <div>
        <Timer
          duration={exercises[exerciseIndex].duration}
          setsLeft={this.state.setsLeft}
        />
        <div></div>
      </div>
    );
  }
}

export default Display;
