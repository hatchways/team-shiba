import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import Header from './Header';
import Paper from '@material-ui/core/Paper';
import Profile from './Profile';
import Payment from './Payment/Payment';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function ProfileDashboard(): JSX.Element {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid>
      <Header></Header>
      <Grid container style={{ padding: '3em' }}>
        <Grid item md={3} style={{ paddingLeft: '3em' }}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            style={{ height: '100vh' }}
          >
            <Tab label="Edit Profile" {...a11yProps(0)} />
            <Tab label="Profile Photo" {...a11yProps(1)} />
            <Tab label="Payment" {...a11yProps(2)} />
            <Tab label="Security" {...a11yProps(3)} />
            <Tab label="Settings" {...a11yProps(4)} />
          </Tabs>
        </Grid>
        <Grid item md={9} style={{ paddingRight: '3em' }}>
          <Paper elevation={3} style={{ minHeight: '70vh' }}>
            <TabPanel value={value} index={0}>
              <Profile></Profile>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Profile Photo
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Payment></Payment>
            </TabPanel>
            <TabPanel value={value} index={3}>
              Security
            </TabPanel>
            <TabPanel value={value} index={4}>
              Settings
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
