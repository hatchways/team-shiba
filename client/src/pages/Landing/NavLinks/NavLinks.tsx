import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import { Typography } from '@material-ui/core';

interface Props {
  link1: string;
  link2: string;
  asideText: string;
  btn1: string;
  btn2: string;
}

const NavLinks = ({ link1, link2, asideText, btn1, btn2 }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box p={1} className={classes.authHeader}>
      <Typography className={classes.accAside}>{asideText}</Typography>
      <Link to={link1} className={classes.link}>
        <Button color="inherit" className={classes.accBtn} variant="contained">
          {btn1}
        </Button>
      </Link>
      <Link to={link2} className={classes.link}>
        <Button color="inherit" className={classes.accBtn2} variant="contained">
          {btn2}
        </Button>
      </Link>
    </Box>
  );
};

export default NavLinks;
