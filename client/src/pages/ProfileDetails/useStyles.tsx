import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    margin: 'auto',
    marginTop: '10vh',
    minHeight: '80vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  blackPaper: {
    backgroundColor: 'black',
  },
  redPaper: {
    backgroundColor: 'lightgrey',
  },
  profile: {
    width: '900px',
    height: '800px',
    margin: '50px 80px',
    backgroundColor: 'white',
  },
  request: {
    width: '300px',
    height: '400px',
    margin: '50px',
    marginLeft: '0px',
    backgroundColor: 'white',
  },
}));

export default useStyles;
