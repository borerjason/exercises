import React from 'react';
import { connect } from 'react-redux';
import exercises from '../../../dummy_data/exercises';
import Timer from '../Timer';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseIndex: 0,
      sets: exercises[0].sets,
      active: true,
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

const mapStateToProps = () => ({ exercises });

export default connect(mapStateToProps)(Display);
