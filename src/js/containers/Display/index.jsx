import React from 'react';
import { connect } from 'react-redux';
import Timer from '../Timer';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseIndex: 0,
      // active: true,
    };

    // this.handleUpdateExerciseIndex = this.handleUpdateExerciseIndex.bind(this);
    this.displayNextExercise = this.displayNextExercise.bind(this);
  }

  // handleUpdateExerciseIndex() {
  //   const nextIndex = this.state.exerciseIndex + 1;
  //   if (this.props.exercises[nextIndex]) {
  //     this.setState({
  //       exerciseIndex: nextIndex,
  //       sets: this.props.exercises[nextIndex].sets,
  //     });
  //   }
  // }

  displayNextExercise() {
    console.log('triggered');
    if (this.state.exerciseIndex < this.props.exercises.length - 1) {
      this.setState({ exerciseIndex: this.state.exerciseIndex + 1 });
    }
  }

  render() {
    console.log(this.props);
    const { exercises } = this.props;
    const { exerciseIndex } = this.state;
    return (
      <div>
        <h3>{exercises.all[exerciseIndex].name}</h3>
        <Timer
          duration={exercises.all[exerciseIndex].duration}
          sets={exercises.all[exerciseIndex].sets}
          next={this.displayNextExercise}
        />
      </div>
    );
  }
}


const mapStateToProps = state =>
  ({ exercises: state.exercises });

export default connect(mapStateToProps)(Display);
