// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  withStyles,
  Button,
  LinearProgress,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { UserLocationButton } from '../../components';
import {
  FeedbackSidebar,
  FilterButton,
} from '../../containers';
import FreebeeMap from '../FreebeeMap';
import styles from './styles';
import type { Classes } from '../../types/styles';

const ToIndexLink = (props: {}) => (<Link to="/" {...props} />);

type Props = {
  classes: Classes,
  openFeedbackSidebar: () => void,
  setUserLocation: () => void,
  isFetching: boolean,
};

const FreebeeMapPage = ({
  classes,
  openFeedbackSidebar,
  setUserLocation,
  currentUserLocation,
  isFetching = true,
}: Props) => (
  <>
    {isFetching
      ? <LinearProgress className={classes.progress} />
      : null
    }
    <FreebeeMap currentUserLocation={currentUserLocation} />
    <FilterButton />
    <Button
      className={classes.toIndexLink}
      variant="fab"
      color="primary"
      component={ToIndexLink}
    >
      <ArrowBack color="action" />
    </Button>

    <div className={classes.userLocationButton}>
      <UserLocationButton onClick={setUserLocation} />
    </div>

    <FeedbackSidebar />

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
  </>
);

export default withStyles(styles)(FreebeeMapPage);
