/* @flow */
import * as React from 'react';
import { withStyles, Button, LinearProgress } from '@material-ui/core';
import { UserLocationButton, FilterButton } from '../../components';
import FeedbackSidebar from '../FeedbackSidebar';
import FreebeeMap from '../FreebeeMap';
import RoutePanel from '../RouteInformationPanel';
import styles from './styles';
import type { Classes } from '../../types/styles';
import { MAP_MODES } from '../../config/map';

type Props = {
  openFeedbackSidebar: () => void,
  setUserLocation: () => void,
  setFilter: () => void,
  resetRoute: () => void,
  isMarkersFetching: boolean,
  setCreationMapMode: () => void,
  setReadMapMode: () => void,
  mapMode: string,
  routeSummary: any,
  selectedFilter: string | null,
  currentUserLocation: number[] | null,
  classes: Classes,
  route: any,
};

const FreebeeMapPage = ({
  openFeedbackSidebar,
  setCreationMapMode,
  mapMode,

  setUserLocation,
  currentUserLocation,

  setFilter,
  selectedFilter,

  routeSummary,
  resetRoute,

  isMarkersFetching,
  classes,
}: Props) => {
  const isReadMode = mapMode === MAP_MODES.READ;

  return (
    <>
      {isMarkersFetching
        ? <LinearProgress className={classes.progress} />
        : null
      }
      <FreebeeMap mapMode={mapMode} currentUserLocation={currentUserLocation} />
      <div className={classes.filterButton}>
        <FilterButton selectedFilter={selectedFilter} setFilter={setFilter} />
      </div>

      <div className={classes.userLocationButton}>
        <UserLocationButton onClick={setUserLocation} />
      </div>

      {!isMarkersFetching && <FeedbackSidebar />}

      {routeSummary && (
        <div className={classes.routePanel}>
          <RoutePanel summary={routeSummary} resetRoute={resetRoute} />
        </div>
      )}

      <div className={classes.contactUsWrapper}>
        <Button
          variant="contained"
          color="primary"
          onClick={isReadMode ? setCreationMapMode : openFeedbackSidebar}
          className={classes.contactUs}
        >
          { isReadMode ? 'Нашли халяву?' : 'Подтвердить' }
        </Button>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={isReadMode ? setCreationMapMode : openFeedbackSidebar}
        className={classes.contactUsDesktop}
      >
        { isReadMode ? 'Нашли халяву?' : 'Подтвердить' }
      </Button>
    </>
  );
};

export default withStyles(styles)(FreebeeMapPage);
