// @flow
import React, { PureComponent } from 'react';
import {
  Divider,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  withStyles,
} from '@material-ui/core';
import {
  DirectionsWalk as DirectionsWalkIcon,
  Place as PlaceIcon,
  Close as CloseIcon,
} from '@material-ui/icons';
import { getTimeFromSummary, getDistanceFromSummary } from './helpers';

import styles from './styles';

class RoutePanel extends PureComponent {
  render() {
    const { classes, summary: { summary, marker }, resetRoute } = this.props;
    const time = getTimeFromSummary(summary);
    const distance = getDistanceFromSummary(summary);

    return (
      <Paper className={classes.root}>
        <div className={classes.header}>
          <Typography variant="subtitle1" gutterBottom>
            {`Адрес: ${marker.address}`}
          </Typography>
          <IconButton
            onClick={resetRoute}
            classes={{ root: classes.closeButtonRoot }}
            className={classes.closeButton}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem disableGutters>
            <ListItemIcon>
              <PlaceIcon />
            </ListItemIcon>
            <ListItemText>
              {distance}
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <DirectionsWalkIcon />
            </ListItemIcon>
            <ListItemText>
              {time}
            </ListItemText>
          </ListItem>
        </List>
      </Paper>
    );
  }
}


export default withStyles(styles)(RoutePanel);
