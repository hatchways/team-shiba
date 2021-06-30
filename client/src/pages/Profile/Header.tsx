import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import logo from '../../Images/logo.png';
import profile from '../../Images/profile.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    paper: {
      padding: '1em 5em',
      margin: 0,
    },
  }),
);

export default function Header(): JSX.Element {
  const classes = useStyles();

  return (
    <Paper elevation={3} style={{ padding: '1em 3em', marginBottom: '1em' }}>
      <div className={classes.root}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div style={{ display: 'flex', gap: '2em', alignItems: 'center' }}>
          <span>Become A Sitter</span>
          <span>My Sitters</span>
          <span>Messages</span>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
            <img style={{ height: '50px' }} src={profile} alt=""></img>
          </div>
        </div>
      </div>
    </Paper>
  );
}
