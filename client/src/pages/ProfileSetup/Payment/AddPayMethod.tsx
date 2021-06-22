import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import dotenv from 'dotenv';
dotenv.config();

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '350px',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid lightgray',
    boxShadow: theme.shadows[5],
    padding: '2em',
  },
}));

export default function AddPayMethod(): JSX.Element {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const stripePromise = loadStripe(process.env.REACT_APP_PUBLISH_KEY!);

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add Payment Method
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Elements stripe={stripePromise}>
              <CheckoutForm></CheckoutForm>
            </Elements>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
