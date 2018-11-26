/* @flow */
import React from 'react';
import { Button } from '@material-ui/core';
import { MyLocation as MyLocationIcon } from '@material-ui/icons';

type Props = {
  onClick: () => void,
};

const UserLocationButton = ({ onClick }: Props) => {
  return (
    <Button
      variant="fab"
      color="primary"
      onClick={onClick}
    >
      <MyLocationIcon color="action" />
    </Button>
  );
};

export default UserLocationButton;
