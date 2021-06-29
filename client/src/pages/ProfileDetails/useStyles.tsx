import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    margin: '0px auto',
    marginTop: '10vh',
    minHeight: '80vh',
    maxWidth: '60vw',
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
    margin: '30px auto',
  },
  request: {
    width: '350px',
    height: '450px',
    margin: '50px',
    marginLeft: 0,
    backgroundColor: 'white',
  },
  cardMedia: {
    height: '300px',
  },
  mainCard: {
    minWidth: 256,
    minHeight: 800,
    textAlign: 'center',
    boxShadow: '10px 10px 10px rgba(68, 68, 68, 0.6)',
  },
  card: {
    // borderRadius: 12,
    minWidth: 256,
    minHeight: 400,
    textAlign: 'center',
    boxShadow: '10px 10px 10px rgba(68, 68, 68, 0.6)',
  },
  location: {
    margin: '20px',
  },
  locationIcon: {
    color: 'red',
  },
  avatar: {
    width: 100,
    height: 100,
    zIndex: 2,
    margin: 'auto',
    marginTop: '-50px',
  },
  descriptionTitle: {
    marginTop: 80,
    textAlign: 'left',
    paddingLeft: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: '0.875em',
  },
  input: {
    display: 'none',
  },
  description: {
    padding: '0 20px',
    fontSize: '15px',
    textAlign: 'left',
  },
  requestSection: {
    backgroundColor: 'white',
    margin: 0,
  },
  price: {
    margin: '0 auto',
    marginTop: 20,
    height: 30,
    fontSize: '25px',
    fontWeight: 'bold',
  },
  rating: {
    height: 20,
    margin: '0 auto',
    marginTop: 20,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    marginTop: 30,
  },
  dateTimeSubSection: {
    margin: 10,
  },
  formLabel: {
    marginLeft: 10,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textField: {
    // marginLeft: theme.spacing(0),
    // marginRight: theme.spacing(0),
    width: 180,
    border: '1px solid #e5e5e5',
    borderRadius: 5,
  },
  dateField: {
    // marginLeft: theme.spacing(0),
    // marginRight: theme.spacing(0),
    width: 160,
    padding: '10px',
    border: '1px solid #e5e5e5',
    borderRadius: 5,
  },
  timeField: {
    // marginLeft: theme.spacing(0),
    // marginRight: theme.spacing(0),
    width: 120,
    padding: '10px',
    border: '1px solid #e5e5e5',
    borderRadius: 5,
  },
  formButton: {
    margin: '0 auto',
    marginTop: 40,
  },
}));

export default useStyles;
