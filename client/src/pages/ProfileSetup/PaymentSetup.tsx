// import CheckoutForm from './Payment/CheckoutForm';
import dotenv from 'dotenv';
import { Box, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import AddPayMethod from './Payment/AddPayMethod';
import { useState } from 'react';
import SavePayment from './Payment/SavePayment';
dotenv.config();

const PaymentSetup = (): JSX.Element => {
  const [savePayment, setSavePayment] = useState([
    { card: '34243', expire: '05 24' },
    { card: '34242', expire: '05 24' },
  ]);

  return (
    <Box>
      <Typography variant="h3" align="center">
        Payment Methods
      </Typography>
      <Grid container spacing={3} justify="space-between">
        {savePayment.map((payment) => (
          <SavePayment key={payment.card}></SavePayment>
        ))}
      </Grid>
      <AddPayMethod></AddPayMethod>
    </Box>
  );
};

export default PaymentSetup;
