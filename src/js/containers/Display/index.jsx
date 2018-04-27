import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import { FlexCol, FlexRow } from '../../components';

import Timer from '../Timer';

class Display extends Component {
  state = {};

  render() {
    const { exercises: { all, currIndex } } = this.props;
    const currExercise = all[currIndex];

    return (
      <FlexRow>
        <List>
          {all.map(exercise => (
            <ListItem
              primaryText={exercise.name}
              key={exercise.id}
            />
          ))}
        </List>
        <FlexCol>
          <Timer
            duration={currExercise.duration}
            sets={currExercise.sets}
            index={currIndex}
          />
          <Card
            style={{ width: '500px' }}
          >
            <CardHeader
              title={currExercise.name}
            />
            <CardMedia>
              <img alt="no-img" src={currExercise.image} />
            </CardMedia>
            <CardTitle
              title={currExercise.name}
              subtitle={`Muscle group: ${currExercise.muscles}`}
            />
            <CardText>
              {currExercise.description}
            </CardText>
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
};

const mapStateToProps = ({ exercises }) => ({ exercises });

export default connect(mapStateToProps)(Display);
