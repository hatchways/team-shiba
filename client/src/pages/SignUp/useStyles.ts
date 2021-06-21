import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: '2em',
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
    paddingLeft: '150px',
  },
  logo: {
    minHeight: '5vh',
    paddingLeft: '3em',
    paddingTop: '2em',
    paddingBottom: '2em',
  },
  navbar: {
    maxHeight: '9vh',
  },
  member: {
    paddingLeft: '120px',
    paddingTop: '2em',
  },
  link: {
    color: '#f04040',
  },
}));

export default useStyles;
