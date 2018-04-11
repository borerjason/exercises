import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateCurrentExercise } from '../../store/app/action';
import { decrementTimeByOne, nextExercise, nextSet, startBuffer } from './utils/timer';

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
    this.timer();
  }

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
        <div>{this.state.time}</div>
        <div>Sets Left: {this.state.setsLeft}</div>
      </div>
    );
  }
}

Timer.propTypes = {
  sets: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

const mapStateToProps = ({ exercises }) => ({ exercises });

const mapDispatchToProps = dispatch => ({
  updateCurrIndex: (currIndex) => {
    dispatch(updateCurrentExercise(currIndex));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Timer);
