import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers, Field } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { CircularProgress, Switch } from '@material-ui/core';
interface Props {
  handleSubmit: (
    {
      dogSitter,
      availableStatus,
      firstName,
      lastName,
      email,
      serviceCharge,
      phoneNumber,
      address,
      description,
    }: {
      dogSitter: string;
      availableStatus: string;
      firstName: string;
      lastName: string;
      email: string;
      serviceCharge: string;
      phoneNumber: string;
      address: string;
      description: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      dogSitter: string;
      availableStatus: string;
      firstName: string;
      lastName: string;
      email: string;
      serviceCharge: string;
      phoneNumber: string;
      address: string;
      description: string;
    }>,
  ) => void;
}

const SitterProfile = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        dogSitter: 'no',
        availableStatus: 'no',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        serviceCharge: '',
        address: '',
        description: '',
      }}
      validationSchema={Yup.object().shape({
        dogSitter: Yup.string().required('Required'),
        availableStatus: Yup.string(),
        firstName: Yup.string().max(15, 'firstName must be 15 or less characters').required('Required'),
        lastName: Yup.string().max(20, 'lastName must be 20 characters or less').required('Required'),
        email: Yup.string().required('Requried').email('Invalid email address'),
        phoneNumber: Yup.string().required('Required'),
        serviceCharge: Yup.string(),
        address: Yup.string().required('Required'),
        description: Yup.string().max(200, 'description must be 200 for less characters'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Box className={classes.box}>
            <h1 className={classes.heading}>Edit Profile</h1>
          </Box>
          <Box className={classes.box}>
            <label className={classes.label}>{`DOG SITTER`}</label>
            <label className={classes.selectLabel}>
              <Field name="dogSitter" type="radio" value="yes" />
              Yes
            </label>
            <label className={classes.selectLabel}>
              <Field name="dogSitter" type="radio" value="no" />
              No
            </label>
          </Box>
          {values.dogSitter === 'yes' && (
            <Box className={classes.box}>
              <label className={classes.label}>{`I'M AVAILABLE`}</label>
              <label className={classes.selectLabel}>
                <Field name="availableStatus" type="radio" value="yes" />
                Yes
              </label>
              <label className={classes.selectLabel}>
                <Field name="availableStatus" type="radio" value="no" />
                No
              </label>
            </Box>
          )}
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
              autoComplete="lastName"
              placeholder="Doe"
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
            <TextField
              id="phoneNumber"
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
              placeholder="home/mobile number"
              helperText={touched.phoneNumber ? errors.phoneNumber : ''}
              error={touched.phoneNumber && Boolean(errors.phoneNumber)}
              value={values.phoneNumber}
              onChange={handleChange}
            />
          </Box>
          {values.dogSitter === 'yes' && (
            <Box className={classes.box}>
              <label className={classes.label}>SERVICE CHARGES</label>
              <TextField
                id="serviceCharge"
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
                placeholder="$/hr charges"
                helperText={touched.serviceCharge ? errors.serviceCharge : ''}
                error={touched.serviceCharge && Boolean(errors.serviceCharge)}
                value={values.serviceCharge}
                onChange={handleChange}
              />
            </Box>
          )}
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
              autoComplete="address"
              placeholder="Address"
              helperText={touched.address ? errors.address : ''}
              error={touched.address && Boolean(errors.address)}
              value={values.address}
              onChange={handleChange}
            />
          </Box>
          {values.dogSitter === 'yes' && (
            <Box className={classes.box}>
              <label className={classes.label}>DESCRIBE YOURSELF</label>
              <TextField
                id="description"
                variant="outlined"
                fullWidth
                margin="normal"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                rows={8}
                InputProps={{
                  classes: { input: classes.inputsDescription },
                }}
                autoComplete="description"
                placeholder="About you"
                multiline={true}
                helperText={touched.description ? errors.description : ''}
                error={touched.description && Boolean(errors.description)}
                value={values.description}
                onChange={handleChange}
              />
            </Box>
          )}
          <Box textAlign="center">
            <Button type="submit" size="small" variant="contained" color="secondary" className={classes.submit}>
              {/* {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'SAVE'} */}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default SitterProfile;
