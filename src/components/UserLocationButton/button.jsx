/* @flow */
import React from 'react';
import { Fab } from '@material-ui/core';
import { MyLocation as MyLocationIcon } from '@material-ui/icons';

type Props = {
  onClick: () => void,
};

const UserLocationButton = ({ onClick }: Props) => {
  return (
    <Fab
      color="primary"
      onClick={onClick}
    >
      <MyLocationIcon color="action" />
    </Fab>
  );
};

export default UserLocationButton;
