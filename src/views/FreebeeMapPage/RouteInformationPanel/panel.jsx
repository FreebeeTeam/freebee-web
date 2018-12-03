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
  withStyles
} from '@material-ui/core';
import { DirectionsWalk, Place } from '@material-ui/icons';
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
        <Divider/>
        <List>
          <ListItem>
            <ListItemIcon>
              <Place />
            </ListItemIcon>
            <ListItemText>
              {distance}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DirectionsWalk />
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
