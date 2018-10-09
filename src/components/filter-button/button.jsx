// @flow
import React, { PureComponent, Fragment } from 'react';
import { Button, withStyles } from '@material-ui/core';
import {
  FilterList,
  Wc as WcIcon,
  Wifi as WifiIcon,
} from '@material-ui/icons';
import cn from 'classnames';
import styles from './styles';
import type { Classes } from '../../types/styles';

type Props = {
  classes: Classes,
};

type State = {
  open: boolean
}

class FilterButton extends PureComponent<Props, State> {
  state = {
    open: false,
  }

  toogle = () => this.setState((prevState: State) => ({ open: !prevState.open }))

  render() {
    const { classes } = this.props;
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
          <Button
            className={cn(classes.button, classes.optionButton)}
            mini
            variant="fab"
            color="secondary"
          >
            <WcIcon color="action" />
          </Button>
          <Button
            className={cn(classes.button, classes.optionButton)}
            mini
            variant="fab"
            color="secondary"
          >
            <WifiIcon color="action" />
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FilterButton);
