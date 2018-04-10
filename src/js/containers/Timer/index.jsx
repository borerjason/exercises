import React from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buffer: false,
      time: this.props.duration,
      setsLeft: this.props.sets,
    };

    this.handleStartExercise = this.handleStartExercise.bind(this);
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    this.timer();
  }


  timer() {
    const timer = setInterval(decrementTimer.bind(this), 1000);
    function decrementTimer() {
      if (this.state.time > 0) {
        this.setState({ time: this.state.time - 1 });
      } else {
        clearInterval(timer);
        if (!this.state.buffer) {
          this.setState({ time: 5, buffer: true }, this.timer);
        } else if (this.state.setsLeft > 0) {
          this.setState({ time: this.props.duration, buffer: false, setsLeft: this.state.setsLeft - 1 }, this.timer);
        } else {
          this.props.next();
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
  next: PropTypes.func.isRequired,
};

export default Timer;
