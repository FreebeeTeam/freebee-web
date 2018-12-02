// @flow
import React, { PureComponent } from 'react';
import { Paper, withStyles, Typography } from '@material-ui/core';
import { getTimeFromSummary, getDistanceFromSummary } from './helpers';

import styles from './styles';

class RoutePanel extends PureComponent {
  render() {
    const { classes, summary: { summary, marker } } = this.props;
    const time = getTimeFromSummary(summary);
    const distance = getDistanceFromSummary(summary);

    return (
      <Paper className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          {`Адрес: ${marker.address}`}
        </Typography>
        <Typography variant="body1" gutterBottom className={classes.routeInfo}>
          {`${distance}, ${time}`}
        </Typography>
      </Paper>
    );
  }
}


export default withStyles(styles)(RoutePanel);
