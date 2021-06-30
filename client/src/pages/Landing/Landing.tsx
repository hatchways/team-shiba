import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import TextField from '@material-ui/core/TextField';
import Logo from '../../Images/logo.png';
import Button from '@material-ui/core/Button';
import NavLinks from './NavLinks/NavLinks';
import DatePickers from './DatePickers/DatePickers';
import { Link } from 'react-router-dom';

export default function Landing(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={6} component={Paper} square>
        <Grid container>
          <Grid item xs={12} className={classes.logo}>
            <img src={Logo} alt="Loving Sitter" />
          </Grid>
          <Grid item xs={12} className={classes.info}>
            <Grid container className={classes.infoGrid}>
              <Grid item xs={12}>
                <Typography className={classes.heading} gutterBottom>
                  Find the care your dog deserves
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Typography variant="h6" gutterBottom className={classes.inputLabel}>
                    WHERE
                  </Typography>
                  <TextField id="outlined-basic" label="Location" variant="outlined" />
                </Box>
                <Box paddingTop="3em">
                  <Typography variant="h6" gutterBottom className={classes.inputLabel}>
                    DROP IN / DROP OFF
                  </Typography>
                  <DatePickers />
                </Box>
                <Box paddingTop="3em">
                  <Button color="inherit" variant="contained" className={classes.submit}>
                    <Link to="/profile"> FIND MY DOG SITTER </Link>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} component={Paper} square className={classes.background}>
        <Box p={1} className={classes.authWrapper}>
          <NavLinks link1="/login" link2="/signup" asideText="BECOME A SITTER" btn1="LOGIN" btn2="SIGN UP" />
        </Box>
      </Grid>
    </Grid>
  );
}
