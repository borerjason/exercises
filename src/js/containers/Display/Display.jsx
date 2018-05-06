import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import { FlexCol, FlexRow } from '../../components';
import CurrentExerciseSelector from '../../store/app/selectors';

import Timer from '../Timer/Timer';

class Display extends Component {
  state = {};

  render() {
    const {
      exercises: { all, currIndex },
      currentExercise,
    } = this.props;

    return (
      <FlexRow>
        <List>
          {all.map(exercise => <ListItem primaryText={exercise.name} key={exercise.id} />)}
        </List>
        <FlexCol>
          <Timer
            duration={currentExercise.duration}
            sets={currentExercise.sets}
            index={currIndex}
          />
          <Card style={{ width: '500px' }}>
            <CardHeader title={currentExercise.name} />
            <CardMedia>
              <img alt="no-img" src={currentExercise.image} />
            </CardMedia>
            <CardTitle
              title={currentExercise.name}
              subtitle={`Muscle group: ${currentExercise.muscles}`}
            />
            <CardText>{currentExercise.description}</CardText>
          </Card>
        </FlexCol>
      </FlexRow>
    );
  }
}

Display.propTypes = {
  exercises: PropTypes.shape({
    all: PropTypes.arrayOf(PropTypes.object),
    currIndex: PropTypes.number,
  }).isRequired,
  currentExercise: PropTypes.shape.isRequired,
};

const mapStateToProps = state => ({
  exercises: state.exercises,
  currentExercise: CurrentExerciseSelector(state),
});

export default connect(mapStateToProps)(Display);
