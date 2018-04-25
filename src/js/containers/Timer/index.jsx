import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Time from '../../components/Time/Time';
import { updateCurrentExercise } from '../../store/app/action';
import { decrementTimeByOne, nextExercise, nextSet, startBuffer } from './utils/timer';

class Timer extends Component {
  state = {
    buffer: false,
    time: this.props.duration,
    setsLeft: this.props.sets,
    active: false,
  };

  timer = this.timer.bind(this);
  handleClickToggle = this.handleClickToggle.bind(this);

  /* eslint-disable */
  timer() {
    const timer = setInterval(runTimer.bind(this), 1000);
    
    function runTimer() {
      const { time, buffer, setsLeft, active } = this.state;
      if (time > 0 && active) {
        decrementTimeByOne.call(this);
      } else {
        clearInterval(timer);
        if (!active) { return; }
        else if (!buffer) {
          startBuffer.call(this);
        } else if (setsLeft > 0) {
          nextSet.call(this);
        } else {
          nextExercise.call(this);
        }
      }
    }
  }

  handleClickToggle() {
    if (!this.state.active) {
      this.setState({ active: true}, this.timer);
    } else {
      this.setState({ active: false})
    }
  }
  /* eslint-enable */

  render() {
    const btnText = this.state.active === true ? 'pause' : 'start';
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={this.handleClickToggle}
        >{btnText}
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
