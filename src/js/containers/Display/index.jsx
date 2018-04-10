import React from 'react';
import { connect } from 'react-redux';
import Timer from '../Timer';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseIndex: 0,
      active: true,
    };

    this.handleUpdateExerciseIndex = this.handleUpdateExerciseIndex.bind(this);
  }

  handleUpdateExerciseIndex() {
    const nextIndex = this.state.exerciseIndex + 1;
    if (this.props.exercises[nextIndex]) {
      this.setState({
        exerciseIndex: nextIndex,
        sets: this.props.exercises[nextIndex].sets,
      });
    }
  }

  render() {
    console.log(this.props);
    const { exercises } = this.props;
    const { exerciseIndex } = this.state;
    return (
      <div>
        <Timer
          duration={exercises[exerciseIndex].duration}
          sets={exercises[exerciseIndex].sets}
          next={this.handleUpdateExerciseIndex}
        />
      </div>
    );
  }
}


const mapStateToProps = state =>
  ({ exercises: state.exercises });

export default connect(mapStateToProps)(Display);
