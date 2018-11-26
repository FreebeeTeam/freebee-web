/* @flow */
import React, { PureComponent } from 'react';
import { Button, withStyles } from '@material-ui/core';
import {
  FilterList,
  Wc as WcIcon,
  Wifi as WifiIcon,
  ClearAll as ClearAllIcon,
} from '@material-ui/icons';
import cn from 'classnames';
import Option from './option';
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

const WcOptionIcon = () => <WcIcon color="action" />;
const WifiOptionIcon = () => <WifiIcon color="action" />;
const ClearAllOptionIcon = () => <ClearAllIcon color="action" />;

class FilterButton extends PureComponent<Props, State> {
  state = {
    open: false,
  }

  onFilterClick = (filter: string | null) => () => {
    const { setFilter } = this.props;

    setFilter(filter);
  }

  toogle = () => this.setState((prevState: State) => ({ open: !prevState.open }))

  render() {
    const { classes, selectedFilter } = this.props;
    const { open } = this.state;

    return (
      <div className={cn(classes.filter)}>
        <Button
          className={cn(classes.button, classes.mainButton)}
          variant="fab"
          color="primary"
          onClick={this.toogle}
        >
          <FilterList color="action" />
        </Button>
        <div className={cn((open ? classes.open : classes.close), classes.drop)}>
          <Option
            isSelected={selectedFilter === null}
            filter={null}
            onClick={this.onFilterClick}
            Icon={ClearAllOptionIcon}
          />
          <Option
            isSelected={selectedFilter === 'toilet'}
            filter="toilet"
            onClick={this.onFilterClick}
            Icon={WcOptionIcon}
          />
          <Option
            isSelected={selectedFilter === 'wifi'}
            filter="wifi"
            onClick={this.onFilterClick}
            Icon={WifiOptionIcon}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FilterButton);
