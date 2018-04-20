import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createSelector, createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Time from '../../components/Time/Time';
import { updateCurrentExercise } from '../../store/app/action';
import { decrementTimeByOne, nextExercise, nextSet, startBuffer } from './utils/timer';

class Timer extends Component {
  state = {
    buffer: false,
    time: this.props.duration,
    setsLeft: this.props.sets,
  };

  componentDidMount() {
    this.timer();
  }

  timer = this.timer.bind(this);

  /* eslint-disable */
  timer() {
    const timer = setInterval(runTimer.bind(this), 1000);
    
    function runTimer() {
      if (this.state.time > 0) {
        decrementTimeByOne.call(this);
      } else {
        clearInterval(timer);
        if (!this.state.buffer) {
          startBuffer.call(this);
        } else if (this.state.setsLeft > 0) {
          nextSet.call(this);
        } else {
          nextExercise.call(this);
        }
      }
    }
  }
  /* eslint-enable */

  render() {
    return (
      <div>
        <button
          onClick={this.handleStartExercise}
        >start
        </button>
        <Time
          time={this.state.time}
        />
        <div>Sets Left: {this.state.setsLeft}</div>
      </div>
    );
  }
}

Timer.propTypes = {
  sets: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

const selectExercises = state => state.exercises;

const mapStateToProps = createStructuredSelector({
  exercises: selectExercises,
});

const mapDispatchToProps = dispatch => ({
  updateCurrIndex: (currIndex) => {
    dispatch(updateCurrentExercise(currIndex));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
