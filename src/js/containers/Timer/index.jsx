import React from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 'buffer',
      buffer: 10,
      time: 0,
    };

    this.handleStartExercise = this.handleStartExercise.bind(this);
    this.timer = this.timer.bind(this);
    // this.decrementTimer = this.decrementTimer.bind(this);
  }

  handleStartExercise(e) {
    e.preventDefault();
    const { duration, sets } = this.props;
    this.timer(sets, duration);
  }


  timer(setsLeft, duration) {
    const timer = setInterval(decrementTimer.bind(this), 1000);
    function decrementTimer() {
      if (this.state.time > 0) {
        this.setState({ time: this.state.time - 1 });
      } else {
        clearInterval(timer);
        if (!this.state.buffer) {
          this.setState({ time: 2, buffer: true }, this.timer);
        } else if (this.state.setsLeft > 0) {
          this.setState({ time: this.props.duration, buffer: false }, this.timer);
        } else {
          console.log('DONE');
          this.props.next();
        }
      }
    }
  }


  render() {
    console.log('rendered', this.props, this.state);
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
  next: PropTypes.func.isRequired,
};

export default Timer;
