import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Timer from '../Timer';

class Display extends Component {
  state = {};

  render() {
    const { exercises } = this.props;
    const currExercise = exercises.all[exercises.currIndex];

    return (
      <div>
        <h3>{currExercise.name}</h3>
        <Timer
          duration={currExercise.duration}
          sets={currExercise.sets}
        />
        <img alt="no-img" src={currExercise.image} />
      </div>
    );
  }
}

Display.propTypes = {
  exercises: PropTypes.shape({
    all: PropTypes.arrayOf(PropTypes.object),
    currIndex: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = ({ exercises }) => ({ exercises });

export default connect(mapStateToProps)(Display);
