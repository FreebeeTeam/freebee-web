// @flow
import * as React from 'react';
import type { ElementType } from 'react';
import cn from 'classnames';
import { Button, withStyles } from '@material-ui/core';
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
    <Button
      className={cn(classes.button, classes.optionButton)}
      mini
      variant="fab"
      color={isSelected ? 'primary' : 'secondary'}
      onClick={onClick(filter)}
    >
      <Icon />
    </Button>
  );
};

export default withStyles(styles)(Option);
