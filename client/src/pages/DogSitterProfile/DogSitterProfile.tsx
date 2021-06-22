/* eslint-disable prettier/prettier */
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SitterProfile  from './SitterProfile/SitterProfile';
import { FormikHelpers } from 'formik';
import createProfile from '../../helpers/APICalls/createProfile';
import { useSnackBar } from '../../context/useSnackbarContext';
import { useAuth } from '../../context/useAuthContext';

export default function DogSitterProfile(): JSX.Element {
    const classes = useStyles();
    const  { updateLoginContext } = useAuth();
    const { updateSnackBarMessage } = useSnackBar();
    const handleSubmit = (
        {  availableStatus, firstName, lastName,  email, phoneNumber, address, description }: 
        { availableStatus: boolean; email: string; firstName: string , lastName: string, phoneNumber: string, address: string, description: string },
        { setSubmitting }: FormikHelpers<{ availableStatus: boolean; email: string;firstName: string , lastName: string, phoneNumber: string, address: string, description: string  }>,
      ) => {
        console.log("it reached here!!");
        createProfile(availableStatus, firstName, lastName, email, phoneNumber, address, description).then((data) => {
          if (data.error) {
            console.error({ error: data.error.message });
            setSubmitting(false);
            updateSnackBarMessage(data.error.message);
          } else if (data.success) {
            console.log("this is the data " , data);
            updateLoginContext(data.success);
          } else {
            // should not get here from backend but this catch is for an unknown issue
            console.error({ data });
    
            setSubmitting(false);
            updateSnackBarMessage('An unexpected error occurred. Please try again');
          }
        });
      };
  return (
    <Grid container component="main"  >
        <CssBaseline />
        <Grid item component={Paper} className={classes.profileBackground}>
            <Box className={classes.box}>
                <SitterProfile handleSubmit={handleSubmit}/>
            </Box>
        </Grid>
      
    </Grid>
  );
}
