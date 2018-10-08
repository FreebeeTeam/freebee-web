// @flow
import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import styles from './styles';
import type { Classes } from '../../types/styles';

type Props = {
  classes: Classes,
};

const FilterButton = ({ classes }: Props) => (
  <Button
    className={classes.filterButton}
    variant="fab"
    color="primary"
  >
    <FilterList color="action" />
  </Button>
);

export default withStyles(styles)(FilterButton);
