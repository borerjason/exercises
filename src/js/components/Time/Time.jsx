import React from 'react';
import PropTypes from 'prop-types';

const Time = ({ time }) => (
  <div>{time}</div>
);

Time.propTypes = {
  time: PropTypes.number.isRequired,
};
export default Time;
