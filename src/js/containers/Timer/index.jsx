import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import Time from '../../components/Time/Time';
import { Label, TimeWrapper, FlexRow, FlexCol } from '../../components';
import { updateCurrentExercise } from '../../store/app/action';
import { decrementTimeByOne, nextExercise, nextSet, startBuffer } from './utils/timer';

class Timer extends Component {
  static getDerivedStateFromProps(nextProps) {
    return {
      time: nextProps.duration,
      setsLeft: nextProps.sets,
      index: nextProps.index,
      buffer: false,
    };
  }

  state = {
    active: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.index !== this.props.index) {
      this.startTimer();
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
      this.setState({ active: true }, this.startTimer);
    } else {
      this.setState({ active: false });
    }
  }
  /* eslint-enable */

  render() {
    const btnText = this.state.active === true ? 'pause' : 'start';

    return (
      <div>
        <FlexRow>
          <FlexCol>
            <Label>Time:</Label>
            <Time
              time={this.state.time}
            />
          </FlexCol>
          <FlexCol>
            <Label>Sets:</Label>
            <TimeWrapper>{this.state.setsLeft}</TimeWrapper>
          </FlexCol>
        </FlexRow>
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
