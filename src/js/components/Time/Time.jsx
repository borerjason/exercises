import React from 'react';
import PropTypes from 'prop-types';
import { TimeWrapper } from '../../components';

const Time = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <TimeWrapper>{minutes}:{seconds < 10 ? '0' : ''}{seconds}</TimeWrapper>
  );
};

Time.propTypes = {
  time: PropTypes.number.isRequired,
};
export default Time;
