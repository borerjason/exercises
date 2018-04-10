import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Timer from '../Timer';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseIndex: 0,
      // active: true,
    };
  }

  render() {
    const { exercises } = this.props;
    const { exerciseIndex } = this.state;
    return (
      <div>
        <h3>{exercises.all[exercises.currIndex].name}</h3>
        <Timer
          duration={exercises.all[exerciseIndex].duration}
          sets={exercises.all[exerciseIndex].sets}
        />
        <img alt="no-img" src={exercises.all[exercises.currIndex].image} />
      </div>
    );
  }
}

Display.propTypes = {
  // exercises: PropTypes.isArray.isRequired,
};


const mapStateToProps = state =>
  ({ exercises: state.exercises });

export default connect(mapStateToProps)(Display);
