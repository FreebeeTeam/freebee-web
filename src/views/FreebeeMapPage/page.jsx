/* @flow */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Button, LinearProgress } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { UserLocationButton, ErrorSnackbar, FilterButton } from '../../components';
import FeedbackSidebar from './FeedbackSidebar';
import FreebeeMap from '../FreebeeMap';
import styles from './styles';
import type { Classes } from '../../types/styles';

const ToIndexLink = (props: {}) => (<Link to="/" {...props} />);

type Props = {
  errorSnackbarIsOpen: boolean,
  locationError: string | null,
  openFeedbackSidebar: () => void,
  closeErrorSnackbar: () => void,
  setUserLocation: () => void,
  setFilter: () => void,
  isFetching: boolean,
  selectedFilter: string | null,
  currentUserLocation: number[] | null,
  classes: Classes,
};

const FreebeeMapPage = ({
  openFeedbackSidebar,

  errorSnackbarIsOpen,
  closeErrorSnackbar,
  locationError,

  setUserLocation,
  currentUserLocation,

  setFilter,
  selectedFilter,

  isFetching,
  classes,
}: Props) => (
  <>
    {isFetching
      ? <LinearProgress className={classes.progress} />
      : null
    }
    <FreebeeMap currentUserLocation={currentUserLocation} />
    <FilterButton selectedFilter={selectedFilter} setFilter={setFilter} />
    <Button
      className={classes.toIndexLink}
      variant="fab"
      color="primary"
      component={ToIndexLink}
    >
      <ArrowBack color="action" />
    </Button>
    <ErrorSnackbar
      isOpen={errorSnackbarIsOpen}
      message={locationError}
      handleClose={closeErrorSnackbar}
    />

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

FreebeeMapPage.defaultProps = {
  isFetching: true,
};

export default withStyles(styles)(FreebeeMapPage);
