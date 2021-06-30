import 'date-fns';
import React, { useState, useEffect, useRef } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
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
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, KeyboardDatePicker, DatePicker } from '@material-ui/pickers';
import SettingsIcon from '@material-ui/icons/Settings';
import MomentUtils from '@date-io/moment';
import './Booking.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const dummUserId = '60ca6b79375d322274dda01f'; // change this when you figure authcontext

const useStyles = makeStyles(({ palette }) => ({
  card: {
    // borderRadius: 12,
    width: 500,
    // minHeight: 200,
    boxShadow: '2px 2px 2px 2px rgba(68, 68, 68, 0.6)',
  },
  settings: {
    float: 'right',
  },
  rightCard: {
    // borderRadius: 12,
    width: 400,
    height: 400,
    boxShadow: '2px 2px 2px 2px rgba(68, 68, 68, 0.6)',
  },
  calendar: {
    width: 600,
    height: 600,
  },
  currentBookings: {
    // borderRadius: 12,
    overflowY: 'scroll',
    maxHeight: 600,
    width: '100%',
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

const BookSettings = ({ id, booking }: { id: string; booking: any }) => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef: any = useRef(null);

  const handleToggle = ({ isOpen }: { isOpen: boolean }) => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event: any) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  return (
    <Box className={styles.settings}>
      <IconButton aria-label="settings" onClick={() => handleToggle(booking)}>
        <SettingsIcon color="disabled" />
      </IconButton>

      <div>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow {...TransitionProps} style={{ transformOrigin: 'center top', float: 'right' }}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id={`menu-list-grow_${id}`} onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose} color="success">
                      Accept
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Deny</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Box>
  );
};

const BookingItem = (props: any) => {
  const styles = useStyles();
  const { header, bookingDate, avatarName, sitter, showHeader, elevate } = props;
  const bookSettings = {
    id: avatarName,
    bookingDate,
    avatarName,
    sitter,
    booking: {},
  };
  const Children = () => {
    return (
      <Box pb={2} pr={2} pl={2}>
        <Box>
          {showHeader && <BookSettings {...bookSettings} />}
          <h4>{bookingDate}</h4>
        </Box>

        <Box>
          <Grid container spacing={0}>
            <Grid item xs={3} sm={3} lg={3}>
              <Avatar className={styles.avatar} src="https://i.pravatar.cc/300"></Avatar>
            </Grid>
            <Grid item xs={9} sm={9} lg={9}>
              <Box mt={2}>
                <b>{sitter}</b>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };
  return (
    <>
      <Box mb={2}>
        {elevate ? (
          <Card>
            <Children />
          </Card>
        ) : (
          <Children />
        )}
      </Box>
    </>
  );
};

export default function Booking() {
  const styles = useStyles();
  const [currentBooking, setCurrentBooking] = useState({});

  const [loading, setLoading] = useState(false);
  const [dateValue, setDateValue] = useState(new Date('08/18/2014'));

  const handleDateChange = (event: any) => {
    // const { name, value } = event.target;
    console.log({ event });
  };

  useEffect(() => {
    console.log('BOOKING LOADED');
  }, []);

  const bookingProps = {
    header: 'XXX',
    bookingDate: '5 April 2020, 10 - 12AM',
    avatarName: 'EE',
    sitter: 'Ehirim Emeka',
    showHeader: false,
    elevate: false,
    key: 1,
    booking: {},
    id: 'next_booking',
  };

  return (
    <Box m={3}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6} lg={6}>
          <Box m={1}>
            <Card className={cx(styles.card)}>
              <BookSettings {...bookingProps} />
              <Box m={1}>
                <h6>YOUR NEXT BOOKING:</h6>
              </Box>
              <Box>
                <BookingItem {...bookingProps} />
              </Box>
            </Card>
          </Box>

          <Box m={1}>
            <Accordion className={cx(styles.card)} defaultExpanded={true}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <h6>CURRENT BOOKINGS:</h6>
              </AccordionSummary>
              <AccordionDetails>
                <Box p={2} className={styles.currentBookings}>
                  {['AB', 'CD', 'EF', 'GH', 'IJ', 'KL'].map((initial) => {
                    bookingProps.avatarName = initial;
                    bookingProps.elevate = true;
                    bookingProps.showHeader = true;

                    return <BookingItem {...bookingProps} key={initial} />;
                  })}
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion className={cx(styles.card)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <h6>PAST BOOKINGS:</h6>
              </AccordionSummary>
              <AccordionDetails>
                <Box p={2} className={styles.currentBookings}>
                  {['AB', 'CD', 'EF', 'GH', 'IJ', 'KL'].map((initial) => {
                    bookingProps.avatarName = initial;
                    bookingProps.elevate = true;
                    bookingProps.showHeader = true;
                    return <BookingItem {...bookingProps} key={initial} />;
                  })}
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} lg={6}>
          <div className="calendar-box">
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                disableToolbar
                open={true}
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={dateValue}
                onChange={handleDateChange}
                TextFieldComponent={() => null}
              />
            </MuiPickersUtilsProvider>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
