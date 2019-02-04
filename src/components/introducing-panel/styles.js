
/* @flow */
import { vk, github } from '../../styles/images';

import type { Styles } from '../../types/styles';

export default (): Styles => ({
  panel: {
    position: 'relative',
    top: '8%',
    left: '8%',
    width: '40%',
    height: 'auto',
    MozBorderRadius: '20px',
    WebkitBorderRadius: '20px',
    borderRadius: '20px',
    background: 'rgba(228, 228, 228, 0.9)',
    zIndex: '100',
  },
  article: {
    width: '100%',
    height: '100%',
    marginBottom: '3em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    width: '90%',
    height: '100%',
    marginBottom: '2em',
    marginTop: '1.5em',
  },
  textCenter: {
    textAlign: 'center',
  },
  blockquote: {
    marginBottom: '1em',
    padding: '1em',
    paddingTop: '0.5em',
    borderLeft: '5px solid #d14942',
    '&:before': {
      display: 'none',
    },
  },
  blockquoteFooter: {
    marginTop: '.5em',
    padding: '0',
    color: '#333333',
    textAlign: 'left',
    lineHeight: '1.5',
    fontStyle: 'italic',
    fontSize: '1em',
    '&:before': {
      content: '"— "',
    },
  },
  blockquoteContent: {
    fontSize: '1em',
    lineHeight: '1.4em',
    textIndent: '0.5em',
  },
  icons: {
    width: '100%',
    marginTop: '2em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    width: '50px',
    height: '50px',
    opacity: '0.8',
    '&:hover': {
      opacity: 0.9,
    },
  },
  github: {
    backgroundImage: `url(${github})`,
  },
  vk: {
    backgroundImage: `url(${vk})`,
  },
  mapIcon: {
    outline: 'none',
  },
  mapIconImg: {
    height: '50px',
  },
  '@media only screen and  (max-width: 425px)': {
    iconContainer: {
      width: '100%',
    },
  },
  '@media only screen and  (max-width: 768px)': {
    panel: {
      top: '0',
      left: '5%',
      width: '90%',
      height: 'auto',
      marginTop: '5%',
      marginBottom: '5%',
    },
    iconContainer: {
      width: '70%',
    },
    icons: {
      marginBottom: '2em',
    },
  },
});
