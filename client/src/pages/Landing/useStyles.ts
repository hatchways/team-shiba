import { makeStyles } from '@material-ui/core/styles';
import { url } from 'inspector';
import Background from '../../Images/2dogs-crop.jpg';
import { theme } from '../../themes/theme';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  background: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  info: {
    minHeight: '90vh',
  },
  logo: {
    minHeight: '5vh',
    paddingLeft: '3em',
    paddingTop: '3em',
  },
  infoGrid: {
    paddingLeft: '10em',
    paddingTop: '8em',
    paddingRight: '6em',
  },
  heading: {
    fontWeight: 'bolder',
    fontSize: 'xxx-large',
  },
  inputLabel: {
    fontWeight: 'bolder',
  },
  submit: {
    width: 170,
    height: 54,
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    backgroundColor: '#f04040',
    color: '#fff',
    boxShadow: 'none',
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: '2em',
  },
}));

export default useStyles;
