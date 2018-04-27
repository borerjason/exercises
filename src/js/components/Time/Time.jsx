import React from 'react';
import PropTypes from 'prop-types';
import { TimeWrapper } from '../../components';

const Time = ({ time, buffer }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <TimeWrapper buffer={buffer}>{minutes}:{seconds < 10 ? '0' : ''}{seconds}</TimeWrapper>
  );
};

Time.propTypes = {
  time: PropTypes.number.isRequired,
  buffer: PropTypes.bool.isRequired,
};
export default Time;
