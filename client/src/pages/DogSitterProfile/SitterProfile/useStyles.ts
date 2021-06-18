import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { findByLabelText } from '@testing-library/react';

const useStyles = makeStyles((theme) => ({
  heading: {
    margin: '0 auto',
    marginTop: '2.5rem',
    marginBottom: '2.5rem',
    textAlign: 'center',
  },
  form: {
    marginTop: '10%',
    width: '80%', // Fix IE 11 issue.
    // margin: 'auto',
    marginLeft: '1rem',
  },
  textField: {
    paddingLeft: '0px',
    width: '60%',
  },
  subTextFieldMonth: {
    paddingTop: '0.5rem',
    width: '7rem',
    margin: '0',
    marginLeft: '1.2rem',
    marginRight: '0.2rem',
  },
  subTextFieldDay: {
    paddingTop: '0.5rem',
    width: '3rem',
    margin: '0 0.2rem',
  },
  subTextFieldYear: {
    paddingTop: '0.5rem',
    width: '6rem',
    marginRight: '2rem',
  },
  inputs: {
    marginTop: '.8rem',
    height: '1.5rem',
    padding: '2px',
    paddingLeft: '10px',
  },
  inputsDescription: {
    marginTop: '.8rem',
    height: '1.5rem',
  },
  label: {
    marginTop: '2rem',
    marginRight: '0.8rem',
    textAlign: 'right',
    fontSize: 11,
    width: '30%',
    height: '2rem',
    color: 'rgb(0,0,0)',
    fontWeight: 'bold',
  },
  box: {
    display: 'flex',
  },
  phoneButton: {
    width: 140,
    height: 30,
    marginTop: 20,
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 46,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: '4rem',
  },
}));

export default useStyles;
