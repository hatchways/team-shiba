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
import { CircularProgress } from '@material-ui/core';
import swal from 'sweetalert2';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const dummUserId = '60ca6b79375d322274dda01f'; // change this when you figure authcontext

const useStyles = makeStyles(({ palette }) => ({
  card: {
    // borderRadius: 12,
    width: 500,
    minHeight: 200,
    boxShadow: '2px 2px 2px 2px rgba(68, 68, 68, 0.6)',
  },
  rightCard: {
    // borderRadius: 12,
    width: 400,
    height: 400,
    boxShadow: '2px 2px 2px 2px rgba(68, 68, 68, 0.6)',
  },
  currentBookings: {
    // borderRadius: 12,
    overflowY: 'scroll',
    maxHeight: 600,
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: deepOrange[500],
    // margin: 'auto',
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

export default function Booking() {
  const styles = useStyles();

  const [userProfilePhoto, setUserProfilePhoto] = useState({ fileUrl: '', filePublicId: '' });
  const [selectedPhoto, setPhoto] = useState({ name: null });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProfilePhoto();
  }, []);

  const selectPhoto = (event: any) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  /**
   * This method uploads a new profile photo
   */
  const uploadPhoto = (event: any) => {
    event.preventDefault();
    setLoading(true);
    profileService
      .uploadProfilePhoto(dummUserId, selectedPhoto)
      .then((photoResponse) => {
        setUserProfilePhoto(photoResponse.data);
        setPhoto({ name: null });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  /**
   * This method retrieves a user's profile photo
   */
  const getProfilePhoto = () => {
    profileService
      .getProfilePhoto(dummUserId)
      .then((profilePhotoResponse) => {
        setUserProfilePhoto(profilePhotoResponse.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  /**
   * This method deletes a user's profile photo
   */
  const deleteProfilePhoto = (event: any) => {
    event.preventDefault();
    if (!userProfilePhoto || !userProfilePhoto.filePublicId) return;
    const doDelete = () =>
      profileService
        .deleteProfilePhoto(userProfilePhoto.filePublicId)
        .then((profilePhotoResponse) => {
          setUserProfilePhoto(profilePhotoResponse.data);
          console.log({ profilePhotoResponse });
        })
        .catch((error) => {
          console.log({ error });
        });

    swal
      .fire({
        title: 'Remove photo',
        text: 'You are about to delete your profile photo',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#007BFF',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No',
      })
      .then((result) => {
        if (result.value) doDelete();
      });
  };

  return (
    <Box m={3}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6} lg={6}>
          <Box m={1}>
            <Card className={cx(styles.card)}>
              <Box m={1}>
                <h6>YOUR NEXT BOOKING:</h6>
              </Box>
              <Box>
                <h4>5 April 2020, 10 - 12AM </h4>
              </Box>

              <Box mt={2}>
                <Grid container spacing={0}>
                  <Grid item xs={3} sm={3} lg={3}>
                    <Avatar className={styles.avatar}>AN</Avatar>
                  </Grid>
                  <Grid item xs={9} sm={9} lg={9}>
                    <Box mt={2}>
                      <b>Emeka Ehirim</b>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Box>
          <Box m={1}>
            <Card className={cx(styles.card)}>
              <Box m={1}>
                <h6>CURRENT BOOKINGS:</h6>
              </Box>
              <Box p={2} className={styles.currentBookings}>
                {['AB', 'CD', 'EF', 'GH', 'IJ', 'KL'].map((initial) => {
                  return (
                    <Box mb={2} key={initial}>
                      <Card>
                        <Box p={2}>
                          <Box>
                            <h4>5 April 2020, 10 - 12AM </h4>
                          </Box>

                          <Box mt={2}>
                            <Grid container spacing={0}>
                              <Grid item xs={3} sm={3} lg={3}>
                                <Avatar className={styles.avatar}>{initial}</Avatar>
                              </Grid>
                              <Grid item xs={9} sm={9} lg={9}>
                                <Box mt={2}>
                                  <b>Emeka Ehirim</b>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Box>
                      </Card>
                    </Box>
                  );
                })}
              </Box>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} lg={6}>
          <Box m={1}>
            <Card className={styles.rightCard}></Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
