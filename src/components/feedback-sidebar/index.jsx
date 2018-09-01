// @flow
import * as React from 'react';
import {
  withStyles,
  SwipeableDrawer,
  Button,
  TextField,
  Typography,
  Grid,
} from '@material-ui/core';
import styles from './styles';
import type { Classes } from '../../types/styles';


type Props = {
  +classes: Classes,
  +isOpen: boolean,
  +close: () => void,
  +open: () => void,
};

const FeedbackSidebar = ({
  classes,
  isOpen,
  close,
  open,
}: Props) => (
  <React.Fragment>
    <SwipeableDrawer
      open={isOpen}
      onClose={close}
      onOpen={open}
      anchor="left"
      classes={{
        paper: classes.sidebarRoot,
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.sidebarTitle}>
            <Typography
              className={classes.sidebarTitleContent}
              variant="headline"
              gutterBottom
              align="center"
            >
              {'Поделитесь халявой с другими!'}
            </Typography>
          </div>
        </Grid>
        <Grid className={classes.fieldsContainer} container spacing={24}>
          <Grid item xs={12}>
            <div className={classes.formField}>
              <TextField
                placeholder="ул. Халявина, 7"
                label="Место халявы"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.formField}>
              <TextField
                placeholder="Туалет"
                label="Вид халявы"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.formField}>
              <TextField
                placeholder="Автор"
                label="Freebee"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.formField}>
              <TextField
                placeholder="Описание найденной халявы"
                label="Описание"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid container className={classes.buttonsContainer}>
              <Button onClick={close} variant="contained" color="secondary">Отменить</Button>
              <Button variant="contained" type="submit" color="primary" onClick={close}>Отправить</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SwipeableDrawer>
  </React.Fragment>
);

export default withStyles(styles)(FeedbackSidebar);