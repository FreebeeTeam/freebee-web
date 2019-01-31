/* @flow */
import type { Theme } from '@material-ui/core';
import type { Styles } from '../../types/styles';

const sideMargin = 12;
const sidebarDesctopSize = 340;

export default (theme: Theme): Styles => ({
  sidebarRoot: {
    width: '100%',
    overflowX: 'hidden',
  },
  sidebarTitle: {
    padding: 16,
    paddingBottom: 0,
  },
  sidebarTitleContent: {
    fontFamily: "'Roboto Condensed', Arial, Helvetica, sans-serif",
    fontWeight: 'bold',
  },
  fieldsContainer: {
    margin: 0,
  },
  formField: {
    margin: sideMargin,
    width: '93%',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  [theme.breakpoints.up('sm')]: {
    sidebarRoot: {
      width: sidebarDesctopSize,
    },
  },
});
