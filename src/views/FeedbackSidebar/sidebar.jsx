/* @flow */
import * as React from 'react';
import {
  withStyles, SwipeableDrawer, Grid,
  Button, TextField, Select, MenuItem,
  FormControl, InputLabel, Typography,
  MuiThemeProvider,
  LinearProgress,
} from '@material-ui/core';
import { getFieldValidationChecker } from './helpers';
import styles, { theme } from './styles';
import type { Classes } from '../../types/styles';
import type { Feedback } from '../../types/models';

type Props = {
  +isOpen: boolean,
  feedback: Feedback,
  freebieTypes: [],
  errors: String[],
  +classes: Classes,
  open: () => void,
  +cancel: () => void,
  +submit: () => void,
  isFeedbackAddressLoading: boolean,
  handleFieldChange: (fields: string) => void,
};

const FeedbackSidebar = ({
  feedback, freebieTypes,
  isFeedbackAddressLoading,
  errors,
  open, isOpen,
  cancel, submit, handleFieldChange,
  classes,
}: Props) => {
  const isValidField = getFieldValidationChecker(errors);

  return (
    <MuiThemeProvider theme={theme}>
      <SwipeableDrawer
        open={isOpen}
        onClose={cancel}
        onOpen={open}
        anchor="left"
        classes={{
          paper: classes.sidebarRoot,
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            {isFeedbackAddressLoading
              ? <LinearProgress color="primary" />
              : null
            }
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
              <FormControl
                error={isValidField('address')}
                required
                fullWidth
                className={classes.formField}
              >
                <TextField
                  error={isValidField('address')}
                  required
                  onChange={handleFieldChange('address')}
                  value={feedback.address || ''}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="ул. Халявина, 7"
                  label="Место халявы"
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                error={isValidField('type')}
                required
                fullWidth
                className={classes.formField}
              >
                <InputLabel
                  required
                  error={isValidField('type')}
                  htmlFor="freebieType"
                >
                  {'Вид халявы'}
                </InputLabel>
                <Select
                  error={isValidField('type')}
                  onChange={handleFieldChange('type')}
                  value={feedback.type}
                  inputProps={{
                    id: 'freebieType',
                    name: 'freebieType',
                  }}
                  fullWidth
                >
                  {freebieTypes.map(type => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                error={isValidField('author')}
                required
                fullWidth
                className={classes.formField}
              >
                <TextField
                  error={isValidField('author')}
                  required
                  onChange={handleFieldChange('author')}
                  value={feedback.author}
                  placeholder="Автор"
                  label="Freebee"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth className={classes.formField}>
                <TextField
                  onChange={handleFieldChange('description')}
                  value={feedback.description}
                  multiline
                  placeholder="Описание найденной халявы"
                  label="Описание"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Grid container className={classes.buttonsContainer}>
                <Button onClick={cancel} variant="contained" color="secondary">Отменить</Button>
                <Button variant="contained" type="submit" color="primary" onClick={submit}>Отправить</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SwipeableDrawer>
    </MuiThemeProvider>
  );
};


export default withStyles(styles)(FeedbackSidebar);
