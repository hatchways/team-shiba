/* eslint-disable prettier/prettier */
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SitterProfile  from './SitterProfile/SitterProfile';
import { FormikHelpers } from 'formik';

export default function DogSitterProfile(): JSX.Element {
    const classes = useStyles();
    const handleSubmit = (
        { availability, firstName, lastName, gender, birthDate, email, phoneNumber, address, description }: 
        { email: string; availability: string; firstName: string , lastName: string, gender: string, birthDate: string, phoneNumber: string, address: string, description: string },
        { setSubmitting }: FormikHelpers<{ email: string; availability: string; firstName: string , lastName: string, gender: string, birthDate: string, phoneNumber: string, address: string, description: string  }>,
      ) => {
        // register(firstName, lastName, gender, birthDate, email, phoneNumber, location, description).then((data) => {
        //   if (data.error) {
        //     console.error({ error: data.error.message });
        //     setSubmitting(false);
        //     updateSnackBarMessage(data.error.message);
        //   } else if (data.success) {
        //     updateLoginContext(data.success);
        //   } else {
        //     // should not get here from backend but this catch is for an unknown issue
        //     console.error({ data });
    
        //     setSubmitting(false);
        //     updateSnackBarMessage('An unexpected error occurred. Please try again');
        //   }
        // });
      };
  return (
    <Grid component="main"  >
        <CssBaseline />
        <Grid item component={Paper} className={classes.profileBackground}>
            <Box className={classes.box}>
                {/* <h1>Edit Profile</h1> */}
                <SitterProfile  handleSubmit={handleSubmit}/>
            </Box>
        </Grid>
      
    </Grid>
  );
}
