/* eslint-disable prettier/prettier */
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import ProfileForm from './ProfileForm/ProfileForm';
import { FormikHelpers } from 'formik';
import createProfile from '../../helpers/APICalls/createProfile';
import { useSnackBar } from '../../context/useSnackbarContext';
import { useAuth } from '../../context/useAuthContext';

export default function Profile(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
  const handleSubmit = (
    { dogSitter, availableStatus, firstName, lastName, email, serviceCharge, phoneNumber, address, description }:
      { dogSitter: string; availableStatus: string; email: string; serviceCharge: string; firstName: string, lastName: string, phoneNumber: string, address: string, description: string },
    { setSubmitting }: FormikHelpers<{ dogSitter: string; availableStatus: string; serviceCharge: string; email: string; firstName: string, lastName: string, phoneNumber: string, address: string, description: string }>,
  ) => {
    createProfile(dogSitter, availableStatus, firstName, lastName, email, phoneNumber, serviceCharge, address, description).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
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
    <Grid component="main" container>
      <Box className={classes.box}>
        <ProfileForm handleSubmit={handleSubmit} />
      </Box>
    </Grid>
  );
}
