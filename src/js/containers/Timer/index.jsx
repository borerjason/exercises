import React from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setsLeft: this.props.setsLeft,
      time: this.props.duration,
    };

    this.handleClickStart = this.handleClickStart.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
  }

  handleClickStart(e) {
    e.preventDefault();
    setInterval(this.decrementTimer, 1000);
  }

  decrementTimer() {
    this.setState({ time: this.state.time - 1 });
  }

  render() {
    console.log(this.props);
    return (
    <div>
      <button
        onClick={this.handleClickStart}
      >start
      </button>
      <div>{this.state.time}</div>
    </div>
    );
  }
}

Timer.propTypes = {
  setsLeft: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default Timer;
