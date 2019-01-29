/* @flow */
import * as React from 'react';
import type { ElementType } from 'react';
import cc from 'classcat';
import { Fab, withStyles } from '@material-ui/core';
import styles from './styles';

import type { Classes } from '../../types/styles';

type Props = {
  filter: string | null,
  onClick: (filter: string | null) => () => void,
  classes: Classes,
  Icon: ElementType,
  isSelected: boolean,
};

const Option = ({
  Icon,
  filter,
  onClick,
  classes,
  isSelected,
}: Props) => {
  return (
    <Fab
      className={cc(classes.button, classes.optionButton)}
      color={isSelected ? 'primary' : 'secondary'}
      onClick={onClick(filter)}
      size="small"
    >
      <Icon />
    </Fab>
  );
};

export default withStyles(styles)(Option);
