import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateCurrentExercise } from '../../store/app/action';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buffer: false,
      time: this.props.duration,
      setsLeft: this.props.sets,
    };

    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    console.log('trigger in CDM');
    this.timer();
  }

  /* eslint-disable */
  timer() {
    const timer = setInterval(decrementTimer.bind(this), 1000);
    function decrementTimer() {
      if (this.state.time > 0) {
        this.setState({ time: this.state.time - 1 });
      } else {
        clearInterval(timer);
        if (!this.state.buffer) {
          this.setState({ time: 10, buffer: true }, this.timer);
        } else if (this.state.setsLeft > 0) {
          this.setState({ time: this.props.duration, buffer: false, setsLeft: this.state.setsLeft - 1 }, this.timer);
        } else {
          if (this.props.exercises.currIndex < this.props.exercises.all.length - 1) {
            const nextIndex = this.props.exercises.currIndex + 1
            this.props.updateCurrIndex(nextIndex);
            this.setState({
              time: this.props.exercises.all[this.props.exercises.currIndex].duration,
              setsLeft: this.props.exercises.all[this.props.exercises.currIndex].sets,
            }, this.timer());
          }
        }
      }
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleStartExercise}
        >start
        </button>
        <div>{this.state.time}</div>
        <div>Sets Left: {this.state.setsLeft}</div>
      </div>
    );
  }
}

Timer.propTypes = {
  sets: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  // next: PropTypes.func.isRequired,
};

const mapStateToProps = ({ exercises }) => (
  { exercises });

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrIndex: (currIndex) => {
      dispatch(updateCurrentExercise(currIndex));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

// have function here that upates the active exercise, then from the active exercise I can pull in the duration and the sets.
// In my display function I can pull in active exercise and pull in name, description, etc. 
