import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

const Time = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <Wrapper>{minutes}:{seconds < 10 ? '0' : ''}{seconds}</Wrapper>
  );
};

Time.propTypes = {
  time: PropTypes.number.isRequired,
};
export default Time;
