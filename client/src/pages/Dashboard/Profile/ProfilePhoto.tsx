import React, { useState, useEffect } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { JSXElement } from '@babel/types';
import profileService from '../../../services/profileService';

const dummUserId = '60ca6b79375d322274dda01f'; // change this when you figure authcontext

const useStyles = makeStyles(({ palette }) => ({
  card: {
    // borderRadius: 12,
    minWidth: 256,
    minHeight: 400,
    textAlign: 'center',
    boxShadow: '10px 10px 10px rgba(68, 68, 68, 0.6)',
  },
  avatar: {
    width: 100,
    height: 100,
    margin: 'auto',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: '0.875em',
  },
  input: {
    display: 'none',
  },
}));

export default function ProfilePhoto() {
  const styles = useStyles();

  const [userProfilePhoto, setUserProfilePhoto] = useState({});

  useEffect(() => {
    getProfilePhoto();
    console.log('Gotten');
  });

  const editPhoto = () => {
    console.log('');
  };
  const deletePhoto = () => {
    console.log('');
  };
  const getProfilePhoto = () => {
    profileService
      .getProfilePhoto(dummUserId)
      .then((profilePhotoResponse) => {
        console.log({ profilePhotoResponse });
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <Box mt={5}>
      <Grid container spacing={3}>
        <Grid item xs={3} sm={3} lg={3}></Grid>
        <Grid item xs={6} sm={6} lg={6}>
          <Card className={cx(styles.card)}>
            <h2>Profile Photo</h2>
            {/* <Typography component="h1">Profile Photo</Typography> */}
            <CardContent>
              <Avatar className={styles.avatar} src={'https://i.pravatar.cc/300'} />
              <Box mt={2} px={3}>
                <Box>
                  <Typography className={styles.subheader} component="b">
                    Be sure to use a photo that clearly shows your face.
                  </Typography>
                </Box>
              </Box>
            </CardContent>

            <Box mt={2}>
              <input accept="image/*" className={styles.input} id="contained-button-file" multiple type="file" />
              <label htmlFor="contained-button-file">
                <Button variant="outlined" size="large" color="secondary" component="span">
                  <Typography>Upload a file from your device</Typography>
                </Button>
              </label>
            </Box>
            <Box mt={2}>
              <IconButton aria-label="delete" color="default" onClick={() => alert('What')}>
                <Box pr={2}>
                  <DeleteIcon />
                </Box>
                <Typography component="span">Delete photo</Typography>
              </IconButton>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={3} sm={3} lg={3}></Grid>
      </Grid>
    </Box>
  );
}
