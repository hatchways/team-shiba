import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container spacing={4} className={classes.root} direction="row">
      <CssBaseline />
      <Grid item className={classes.profile}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="profile background"
              height="250"
              image="/public/backgroundHouse.jpeg"
              title="profile background"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item container className={classes.request}>
        hello there
      </Grid>
    </Grid>
  );
}
