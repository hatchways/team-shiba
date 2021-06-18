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
}));

export default useStyles;
