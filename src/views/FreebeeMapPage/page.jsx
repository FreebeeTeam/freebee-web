/* @flow */
import * as React from 'react';
import { withStyles, Button, LinearProgress } from '@material-ui/core';
import { UserLocationButton, FilterButton } from '../../components';
import FeedbackSidebar from './FeedbackSidebar';
import FreebeeMap from '../FreebeeMap';
import RoutePanel from './RouteInformationPanel';
import styles from './styles';
import type { Classes } from '../../types/styles';

type Props = {
  openFeedbackSidebar: () => void,
  setUserLocation: () => void,
  setFilter: () => void,
  resetRoute: () => void,
  setCreationMapMode: (mode: string) => void,
  isMarkersFetching: boolean,
  mapMode: string,
  routeSummary: any,
  selectedFilter: string | null,
  currentUserLocation: number[] | null,
  classes: Classes,
  route: any,
};

const FreebeeMapPage = ({
  setCreationMapMode,

  setUserLocation,
  currentUserLocation,

  setFilter,
  selectedFilter,

  routeSummary,
  resetRoute,

  isMarkersFetching,
  classes,
}: Props) => {
  return (
    <>
      {isMarkersFetching
        ? <LinearProgress className={classes.progress} />
        : null
      }
      <FreebeeMap currentUserLocation={currentUserLocation} />
      <div className={classes.filterButton}>
        <FilterButton selectedFilter={selectedFilter} setFilter={setFilter} />
      </div>

      <div className={classes.userLocationButton}>
        <UserLocationButton onClick={setUserLocation} />
      </div>

      <FeedbackSidebar />

      {routeSummary && (
        <div className={classes.routePanel}>
          <RoutePanel summary={routeSummary} resetRoute={resetRoute} />
        </div>
      )}

      <div className={classes.contactUsWrapper}>
        <Button
          variant="contained"
          onClick={setCreationMapMode}
          className={classes.contactUs}
        >
          {'Нашли халяву?'}
        </Button>
      </div>
      <Button
        variant="contained"
        onClick={setCreationMapMode}
        className={classes.contactUsDesktop}
      >
        {'Нашли халяву?'}
      </Button>
    </>
  );
};

FreebeeMapPage.defaultProps = {
  isMarkersFetching: true,
};

export default withStyles(styles)(FreebeeMapPage);
