/* @flow */
import * as React from 'react';
import { withStyles, Button, LinearProgress } from '@material-ui/core';
import {
  UserLocationButton,
  FilterButton,
  SearchButton,
} from '../../components';
import FeedbackSidebar from '../FeedbackSidebar';
import Map from '../Map';
import RoutePanel from '../RouteInformationPanel';
import { MAP_MODES } from '../../config/map';
import styles from './styles';
import type { Classes } from '../../types/styles';

type Props = {
  submitFeedbackLocation: () => void,
  setUserLocation: () => void,
  setFilter: () => void,
  setSearch: () => void,
  resetRoute: () => void,
  isMarkersFetching: boolean,
  setCreationMapMode: () => void,
  mapMode: string,
  routeSummary: any,
  selectedFilter: string | null,
  currentUserLocation: number[] | null,
  classes: Classes,
  route: any,
};

const MapPage = ({
  submitFeedbackLocation,
  setCreationMapMode,
  mapMode,

  setUserLocation,
  currentUserLocation,

  setFilter,
  setSearch,
  selectedFilter,

  routeSummary,
  resetRoute,

  isMarkersFetching, classes,
}: Props) => {
  const isReadMode = mapMode === MAP_MODES.READ;

  return (
    <>
      {isMarkersFetching
        ? <LinearProgress className={classes.progress} />
        : null
      }
      <Map mapMode={mapMode} currentUserLocation={currentUserLocation} />
      <div className={classes.searchButton}>
        <SearchButton onChange={setSearch} />
      </div>

      <div className={classes.filterButton}>
        <FilterButton selectedFilter={selectedFilter} setFilter={setFilter} />
      </div>

      <div className={classes.userLocationButton}>
        <UserLocationButton onClick={setUserLocation} />
      </div>

      {mapMode === MAP_MODES.CREATE && <FeedbackSidebar />}

      {routeSummary && (
        <div className={classes.routePanel}>
          <RoutePanel summary={routeSummary} resetRoute={resetRoute} />
        </div>
      )}

      <div className={classes.contactUsWrapper}>
        <Button
          variant="contained"
          color="primary"
          onClick={isReadMode ? setCreationMapMode : submitFeedbackLocation}
          className={classes.contactUs}
        >
          { isReadMode ? 'Нашли халяву?' : 'Подтвердить' }
        </Button>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={isReadMode ? setCreationMapMode : submitFeedbackLocation}
        className={classes.contactUsDesktop}
      >
        { isReadMode ? 'Нашли халяву?' : 'Подтвердить' }
      </Button>
    </>
  );
};

export default withStyles(styles)(MapPage);
