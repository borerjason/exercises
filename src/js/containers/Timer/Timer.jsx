import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import Time from '../../components/Time/Time';
import { Label, TimeWrapper, FlexRow, FlexCol } from '../../components';
import { updateCurrentExercise } from '../../store/app/action';
import { decrementTimeByOne, nextExercise, nextSet, startBuffer } from '../../utils/timer';

class Timer extends Component {
  static getDerivedStateFromProps(nextProps) {
    return {
      // time: nextProps.duration,
      setsLeft: nextProps.sets,
      buffer: true,
    };
  }

  state = {
    active: false,
    time: 2,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.index !== this.props.index) {
      this.setState({ time: 2 }, this.startTimer);
      // this.startTimer();
    }
  }

  startTimer = this.startTimer.bind(this);
  handleClickToggle = this.handleClickToggle.bind(this);

  startTimer() {
    const timer = setInterval(runTimer.bind(this), 1000);

    function runTimer() {
      const {
        time,
        buffer,
        setsLeft,
        active,
      } = this.state;

      if (time > 0 && active) {
        decrementTimeByOne.call(this);
      } else {
        clearInterval(timer);
        if (!active) { return; }
        else if (!buffer && setsLeft > 0) {
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
      this.setState({ active: true }, this.startTimer);
    } else {
      this.setState({ active: false });
    }
  }
  /* eslint-enable */

  render() {
    const btnText = this.state.active === true ? 'pause' : 'start';
    let message;

    if (this.state.buffer && this.state.setsLeft === this.props.sets) {
      message = 'Get Ready...'; 
    } else if (this.state.buffer) {
      message = 'Switch sides or rest';
    } else {
      message = '';
    }

    return (
      <div>
        <FlexRow>
          <FlexCol>
            <Label>Time:</Label>
            <Time
              time={this.state.time}
              buffer={this.state.buffer}
            />
          </FlexCol>
          <FlexCol>
            <Label>Sets Left:</Label>
            <TimeWrapper>{this.state.setsLeft}</TimeWrapper>
          </FlexCol>
        </FlexRow>
        <h3>{message}</h3>
        <RaisedButton
          label={btnText}
          primary={true}
          onClick={this.handleClickToggle}
        />
      </div>
    );
  }
}

Timer.propTypes = {
  index: PropTypes.number.isRequired,
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
