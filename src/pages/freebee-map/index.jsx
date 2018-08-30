// @flow
import * as React from 'react';
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
import type { Classes } from '../../types/styles';


const ToIndexLink = (props: Object) => (<Link to="/" {...props} />);

type Props = {
  classes: Classes,
  openFeedbackSidebar: () => void,
};

const FreebeeMap = ({ classes, openFeedbackSidebar }: Props) => (
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
      {'Нашли халяву?'}
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

export default withStyles(styles)(FreebeeMap);
