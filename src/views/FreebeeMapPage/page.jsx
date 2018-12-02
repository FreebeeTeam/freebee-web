/* @flow */
import * as React from 'react';
import { withStyles, Button, LinearProgress } from '@material-ui/core';
import { UserLocationButton, ErrorSnackbar, FilterButton } from '../../components';
import FeedbackSidebar from './FeedbackSidebar';
import FreebeeMap from '../FreebeeMap';
import RoutePanel from './RouteInformationPanel';
import styles from './styles';
import type { Classes } from '../../types/styles';

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
  route: any,
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

  routeSummary,

  isFetching,
  classes,
}: Props) => (
  <>
    {isFetching
      ? <LinearProgress className={classes.progress} />
      : null
    }
    <FreebeeMap currentUserLocation={currentUserLocation} />
    <div className={classes.filterButton}>
      <FilterButton selectedFilter={selectedFilter} setFilter={setFilter} />
    </div>
    <ErrorSnackbar
      isOpen={errorSnackbarIsOpen}
      message={locationError}
      handleClose={closeErrorSnackbar}
    />

    <div className={classes.userLocationButton}>
      <UserLocationButton onClick={setUserLocation} />
    </div>

    <FeedbackSidebar />

    {routeSummary && (
    <div className={classes.routePanel}>
      <RoutePanel summary={routeSummary} />
    </div>
    )}

    {/* <Button
      variant="contained"
      onClick={openFeedbackSidebar}
      className={classes.contactUs}
    >
      {'Нашли халяву?'}
    </Button> */}
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
