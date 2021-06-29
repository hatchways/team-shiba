import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import { useEffect, useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import profileService from '../../services/profileService';
import { TextField } from '@material-ui/core';
const dummUserId = '60ca6b79375d322274dda01f';

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();

  const getBackgroundPhoto = () => {
    //
  };

  const getProfilePhoto = () => {
    profileService
      .getProfilePhoto(dummUserId)
      .then((profilePhotoResponse) => {
        setProfilePic(profilePhotoResponse.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const [profilePic, setProfilePic] = useState({ fileUrl: 'https://i.pravatar.cc/300', filePublicId: '' });
  const [rating, setRating] = useState(3.5);

  useEffect(() => {
    getProfilePhoto();
  }, []);
  console.log('this is the public url', process.env.PUBLIC_URL);
  return (
    <Grid container spacing={4} className={classes.root} direction="row">
      <CssBaseline />
      <Grid item className={classes.profile}>
        <Card className={classes.mainCard}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                alt="profile background"
                src={'/images/backgroundHouse.jpg'}
                title="profile background"
              />
            </CardActionArea>
          </Card>
          <Avatar className={classes.avatar} alt="profile image" src={profilePic?.fileUrl} />
          <CardContent>
            <Typography variant="h5" component="h3" className={classes.name}>
              Norma Byers
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Loving pet sitter
            </Typography>
            <Typography className={classes.location} variant="subtitle1">
              <LocationOnSharpIcon className={classes.locationIcon} /> Toronto, Ontario
            </Typography>
            <Typography className={classes.descriptionTitle} variant="h5" component="h3">
              About Me
            </Typography>
            <Typography variant="body2" component="p" className={classes.description}>
              Animals are my passion! I will look after your pets with loving care. I have some availability for pet
              care in my home as well. I have 10 yrs experience at the animal hospital, and have owned multiple pets for
              many years, including numerous rescues. Kindly email, text or call me and I will respond promptly!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid container item className={classes.request} direction="column">
        <Typography className={classes.price} variant="h5" component="h3">
          $14/hr
        </Typography>
        <Rating className={classes.rating} name="user-rating" value={rating} />
        <form className={classes.container} noValidate>
          <label htmlFor="DROP OFF" className={classes.formLabel}>
            DROP IN
          </label>
          <div className={classes.dateTimeSubSection}>
            <TextField
              type="date"
              defaultValue="2021-05-24"
              className={classes.dateField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              type="time"
              defaultValue="07:30"
              className={classes.timeField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </div>
          <label htmlFor="DROP OFF" className={classes.formLabel}>
            DROP OFF
          </label>
          <div className={classes.dateTimeSubSection}>
            <TextField
              type="date"
              defaultValue="2021-05-24"
              className={classes.dateField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              type="time"
              defaultValue="07:30"
              className={classes.timeField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </div>
          <Button color="secondary" className={classes.formButton} variant="contained">
            SEND REQUEST
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}
