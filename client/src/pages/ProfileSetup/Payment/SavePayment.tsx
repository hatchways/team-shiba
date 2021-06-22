import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';

const SavePayment = (): JSX.Element => {
  return (
    <Grid md={5} item>
      <Paper style={{ padding: '2em' }}>\
        <Grid container justify="space-between">
          <img
            style={{ width: '140px' }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Visa_2014_logo_detail.svg/1200px-Visa_2014_logo_detail.svg.png"
          />
        </Grid>
        <div>
          <span>4242</span>
          <span>****</span>
          <span>****</span>
          <span>4242</span>
        </div>
        <p>John Doe</p>
      </Paper>
    </Grid>
  );
};

export default SavePayment;
