/* @flow */
import React, { Component } from 'react';
import { withStyles, Fab } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import cc from 'classcat';
import Option from './option';
import { MARKER_FILTERS } from './filters';
import {
  ClearAllOptionIcon,
  SocketOptionIcon,
  WcOptionIcon,
  WifiOptionIcon,
} from './icons';
import styles from './styles';
import type { Classes } from '../../types/styles';

type Props = {
  classes: Classes,
  selectedFilter: string,
  setFilter: (filter: string | null) => void,
};

type State = {
  open: boolean,
};

class FilterButton extends Component<Props, State> {
  state = {
    open: false,
  };

  onFilterClick = (filter: string | null) => () => {
    const { setFilter } = this.props;

    setFilter(filter);
  };

  toggle = (): void => {
    this.setState((prevState: State) => ({
      open: !prevState.open,
    }));
  };

  render() {
    const { classes, selectedFilter } = this.props;
    const { open } = this.state;

    return (
      <div className={cc([classes.filter])}>
        <Fab
          className={cc([classes.button, classes.mainButton])}
          color="primary"
          onClick={this.toggle}
        >
          <FilterList color="inherit" />
        </Fab>
        <div className={cc([(open ? classes.open : classes.close), classes.drop])}>
          <Option
            isSelected={selectedFilter === null}
            filter={MARKER_FILTERS.all.value}
            onClick={this.onFilterClick}
            Icon={ClearAllOptionIcon}
          />
          <Option
            isSelected={selectedFilter === MARKER_FILTERS.toilet.value}
            filter={MARKER_FILTERS.toilet.value}
            onClick={this.onFilterClick}
            Icon={WcOptionIcon}
          />
          <Option
            isSelected={selectedFilter === MARKER_FILTERS.wifi.value}
            filter={MARKER_FILTERS.wifi.value}
            onClick={this.onFilterClick}
            Icon={WifiOptionIcon}
          />
          <Option
            isSelected={selectedFilter === MARKER_FILTERS.socket.value}
            filter={MARKER_FILTERS.socket.value}
            onClick={this.onFilterClick}
            Icon={SocketOptionIcon}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FilterButton);
