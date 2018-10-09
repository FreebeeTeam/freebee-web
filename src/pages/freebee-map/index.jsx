// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  withStyles,
  Button,
  LinearProgress,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { FilterButton } from '../../components';
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
  isFetching: boolean,
};

const FreebeeMap = ({ classes, openFeedbackSidebar, isFetching = true }: Props) => (
  <React.Fragment>
    {isFetching
      ? <LinearProgress className={classes.progress} />
      : null
    }
    <Map />
    <FilterButton />
    <Button
      className={classes.toIndexLink}
      variant="fab"
      color="primary"
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
