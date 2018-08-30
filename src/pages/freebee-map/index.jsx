import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  withStyles,
  Button,
} from '@material-ui/core';
import {
  ArrowBack,
} from '@material-ui/icons';

import {
  FeedbackSidebar as Feedback,
  Map,
} from '../../containers';
import styles from './styles';

const ToIndexLink = props => (<Link to="/" {...props} />);

const FreebeeMap = ({ classes, openFeedbackSidebar }) => (
  <React.Fragment>
    <Map />
    <Button
      className={classes.toIndexLink}
      variant="fab"
      color="primary"
      aria-label="Return"
      component={ToIndexLink}
    >
      <ArrowBack color="action" />
    </Button>

    <Feedback />

    <Button
      variant="contained"
      onClick={openFeedbackSidebar}
      className={classes.contactUs}
    >
      Нашли халяву?
    </Button>
    <Button
      variant="contained"
      onClick={openFeedbackSidebar}
      className={classes.contactUsDesktop}
    >
      {'Нашли халяву?'}
    </Button>
  </React.Fragment>
);

FreebeeMap.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  openFeedbackSidebar: PropTypes.func.isRequired,
};

export default withStyles(styles)(FreebeeMap);
