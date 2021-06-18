import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers, Field } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { JsxEmit } from 'typescript';
import MenuItem from '@material-ui/core/MenuItem';

interface Props {
  handleSubmit: (
    {
      availability,
      firstName,
      lastName,
      gender,
      birthDate,
      email,
      phoneNumber,
      address,
      description,
    }: {
      availability: string;
      firstName: string;
      lastName: string;
      gender: string;
      birthDate: string;
      email: string;
      phoneNumber: string;
      address: string;
      description: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      availability: string;
      firstName: string;
      lastName: string;
      gender: string;
      birthDate: string;
      email: string;
      phoneNumber: string;
      address: string;
      description: string;
    }>,
  ) => void;
}

const SitterProfile = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();
  let totalDays = 31;
  //let daysArr = [];
  //let yearsArr = [1960, 2021];
  const [month, setMonth] = useState('January');
  const [day, setDay] = useState(1);
  const [year, setYear] = useState(1970);
  const monthsOddDays = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
  const monthsEvenDays = ['February', 'April', 'June', 'September', 'November'];
  const yearsArr: number[] = [];
  for (let i = 1960; i <= 2021; i++) {
    yearsArr.push(i);
  }
  //   const months = [
  //     { name: 'January', days: 31 },
  //     { name: 'February', days: 28 },
  //     { name: 'March', days: 31 },
  //     { name: 'April', days: 30 },
  //     { name: 'May', days: 31 },
  //     { name: 'June', days: 30 },
  //     { name: 'July', days: 31 },
  //     { name: 'August', days: 31 },
  //     { name: 'September', days: 30 },
  //     { name: 'October', days: 31 },
  //     { name: 'November', days: 30 },
  //     { name: 'December', days: 31 },
  //   ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('it reached here!!');
    //setMonth(event.target.value);
  };
  return (
    <Formik
      id="profile"
      initialValues={{
        availability: '',
        firstName: '',
        lastName: '',
        gender: '',
        birthDate: '',
        email: '',
        phoneNumber: '',
        address: '',
        description: '',
      }}
      validationSchema={Yup.object().shape({
        availability: Yup.string().required('Required'),
        firstName: Yup.string().max(15, 'firstName must be 15 or less characters').required('Required'),
        lastName: Yup.string().max(20, 'lastName must be 20 characters or less').required('Required'),
        gender: Yup.string().required('Requried'),
        birthDate: Yup.string().required('Required'),
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
            <label className={classes.label}>AVAILABILITY</label>
            <TextField
              variant="outlined"
              id="availability"
              className={classes.textField}
              // label={<Typography className={classes.label}>AVAILABILITY</Typography>}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: { input: classes.inputs },
              }}
              name="availability"
              autoComplete="availability"
              autoFocus
              helperText={touched.availability ? errors.availability : ''}
              error={touched.availability && Boolean(errors.availability)}
              value={values.availability}
              onChange={handleChange}
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
            <label className={classes.label}>GENDER</label>
            <TextField
              id="gender"
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
              name="gender"
              autoComplete="gender"
              placeholder="male"
              autoFocus
              helperText={touched.gender ? errors.gender : ''}
              error={touched.gender && Boolean(errors.gender)}
              value={values.gender}
              onChange={handleChange}
            />
          </Box>
          <Box className={classes.box}>
            <label className={classes.label}>BIRTH DATE</label>
            <TextField
              className={classes.subTextFieldMonth}
              name="month"
              id="month"
              variant="outlined"
              select
              value={month}
              onChange={(e) => handleChange(e)}
            >
              {months.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.subTextFieldDay}
              id="day"
              variant="outlined"
              select
              value={day}
              onChange={handleChange}
            >
              {(totalDays = monthsOddDays.includes(month) ? 31 : 30)}
              {(totalDays = monthsEvenDays.includes(month) ? 30 : 31)}
              {(totalDays = month === 'February' ? 28 : 31)}
              {/* {daysArr = new Array(totalDays)} */}
              {Array.from(Array(totalDays).keys()).map((item) => (
                <MenuItem key={item + 1} value={item + 1}>
                  {item + 1}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.subTextFieldYear}
              id="year"
              variant="outlined"
              select
              value={year}
              onChange={handleChange}
            >
              {yearsArr.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </TextField>
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
