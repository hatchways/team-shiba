import { Box, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useState } from 'react';
import AddPayMethod from './AddPayMethod';
import SavePayment from './SavePayment';

const PaymentSetup = (): JSX.Element => {
  const [saveMethod, setSaveMethod] = useState([
    { card: 'mastercard', expire: '05 24', number: '4568894' },
    { card: 'visa', expire: '05 24', number: '458946' },
  ]);

  return (
    <Box>
      <Typography variant="h3" align="center">
        Payment Methods
      </Typography>
      <Grid container spacing={3} justify="space-between">
        {saveMethod.map((payment) => (
          <SavePayment key={payment.number}></SavePayment>
        ))}
      </Grid>
      <AddPayMethod></AddPayMethod>
    </Box>
  );
};

export default PaymentSetup;
