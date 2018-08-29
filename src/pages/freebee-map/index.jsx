import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  withStyles,
  Button,
  Grid,
} from '@material-ui/core';
import {
  ArrowBack,
} from '@material-ui/icons';
import {
  FreebeeMap as Map,
  FeedbackSidebar as Feedback,
} from '../../components';
import styles from './styles';

const ToIndexLink = props => (<Link to="/" {...props} />);

const FreebeeMap = ({ classes }) => (
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

    {/* <div className="freebee-filter fixed-action-btn">
      <button type="button" className="btn-floating btn-large amber accent-3">
        <i className="large material-icons black-text">filter_list</i>
      </button>
      <ul>
        <li>
          <button type="button" id="filter-by-wifis" className="btn-floating grey lighten-1">
            <i className="material-icons black-text">wifi</i>
          </button>
        </li>
        <li>
          <button type="button" id="filter-by-toilets" className="btn-floating grey lighten-1">
            <i className="material-icons black-text">wc</i>
          </button>
        </li>
        <li>
          <button type="button" id="filter-clear" className="btn-floating grey lighten-1">
            <img
              className="default-filter active-filter"
              src="./image/default-filter.png"
              alt="default filter"
            />
          </button>
        </li>
      </ul>
    </div> */}

    <Button
      variant="contained"
      className={classes.contactUs}
    >
      Нашли халяву?
    </Button>
    <Button
      variant="contained"
      className={classes.contactUsDesktop}
    >
      {'Нашли халяву?'}
    </Button>
  </React.Fragment>
);

FreebeeMap.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(FreebeeMap);
