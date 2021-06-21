import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers, Field } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';
import { FormLabel, Switch } from '@material-ui/core';
interface Props {
  handleSubmit: (
    {
      availableStatus,
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      description,
    }: {
      availableStatus: boolean;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      address: string;
      description: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      availableStatus: boolean;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      address: string;
      description: string;
    }>,
  ) => void;
}

const SitterProfile = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <Formik
      id="profile"
      initialValues={{
        availableStatus: false,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        description: '',
      }}
      validationSchema={Yup.object().shape({
        availableStatus: Yup.boolean().required('Required'),
        firstName: Yup.string().max(15, 'firstName must be 15 or less characters').required('Required'),
        lastName: Yup.string().max(20, 'lastName must be 20 characters or less').required('Required'),
        email: Yup.string().required('Requried').email('Invalid email address'),
        phoneNumber: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        describeYourself: Yup.string().required('Required').max(200, 'description must be 200 for less characters'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Box className={classes.box}>
            <h1 className={classes.heading}>Edit Profile</h1>
          </Box>
          <Box className={classes.box}>
            <label className={classes.label}>{`I'M AVAILABLE`}</label>
            <Switch
              className={classes.switch}
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Box>
          <Box className={classes.box}>
            <label className={classes.label}>FIRST NAME</label>
            <TextField
              id="firstName"
              variant="outlined"
              className={classes.textField}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: { input: classes.inputs },
              }}
              placeholder="John"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              helperText={touched.firstName ? errors.firstName : ''}
              error={touched.firstName && Boolean(errors.firstName)}
              value={values.firstName}
              onChange={handleChange}
            />
          </Box>
          <Box className={classes.box} id="box1">
            <label className={classes.label}>LAST NAME</label>
            <TextField
              id="lastName"
              variant="outlined"
              fullWidth
              margin="normal"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: { input: classes.inputs },
              }}
              name="lastName"
              autoComplete="lastName"
              placeholder="Doe"
              autoFocus
              helperText={touched.lastName ? errors.lastName : ''}
              error={touched.lastName && Boolean(errors.lastName)}
              value={values.lastName}
              onChange={handleChange}
            />
          </Box>
          <Box className={classes.box}>
            <label className={classes.label}>EMAIL ADDRESS</label>
            <TextField
              id="email"
              variant="outlined"
              fullWidth
              margin="normal"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: { input: classes.inputs },
              }}
              name="email"
              autoComplete="email"
              placeholder="john-doe@gmail.com"
              helperText={touched.email ? errors.email : ''}
              error={touched.email && Boolean(errors.email)}
              value={values.email}
              onChange={handleChange}
            />
          </Box>
          <Box className={classes.box}>
            <label className={classes.label}>PHONE NUMBER</label>
            <label className={classes.label}>No Phone number entered</label>
            <Button size="small" variant="outlined" color="secondary" className={classes.phoneButton}>
              {'Add a phone number'}
            </Button>
          </Box>
          <Box className={classes.box}>
            <label className={classes.label}>WHERE YOU LIVE</label>
            <TextField
              id="address"
              variant="outlined"
              fullWidth
              margin="normal"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: { input: classes.inputs },
              }}
              name="address"
              autoComplete="address"
              placeholder="Address"
              helperText={touched.address ? errors.address : ''}
              error={touched.address && Boolean(errors.address)}
              value={values.address}
              onChange={handleChange}
            />
          </Box>
          <Box className={classes.box}>
            <label className={classes.label}>DESCRIBE YOURSELF</label>
            <TextField
              id="description"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline={true}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              rows={8}
              InputProps={{
                classes: { input: classes.inputsDescription },
              }}
              name="description"
              autoComplete="description"
              placeholder="About you"
              helperText={touched.description ? errors.description : ''}
              error={touched.description && Boolean(errors.description)}
              value={values.description}
              onChange={handleChange}
            />
          </Box>
          <Box textAlign="center">
            <Button type="submit" size="small" variant="contained" color="secondary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'SAVE'}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default SitterProfile;
