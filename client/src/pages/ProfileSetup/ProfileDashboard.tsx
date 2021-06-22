import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Paper } from '@material-ui/core';
import Header from '../../components/Header/Header';
import dotenv from 'dotenv';
import PaymentSetup from './PaymentSetup';
dotenv.config();

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
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '150px 1fr',
    padding: '5em',
    backgroundColor: '#FAFAFB',
  },
  tabs: {
    borderRight: `0px solid ${theme.palette.divider}`,
  },
  paper: {
    padding: '0 7em 0 3em',
  },
}));

export default function ProfileDashboard(): JSX.Element {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };
  console.log('Env ', process.env.REACT_APP_PUBLISH_KEY);

  return (
    <div>
      <Header></Header>
      <Grid container style={{ padding: '5%' }}>
        <Grid spacing={3} item md={2}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab style={{ fontSize: '14px' }} label="Edit Profile" {...a11yProps(0)} />
            <Tab style={{ fontSize: '14px' }} label="Profile Photo" {...a11yProps(1)} />
            <Tab style={{ fontSize: '14px' }} label="Payment" {...a11yProps(2)} />
            <Tab style={{ fontSize: '14px' }} label="Security" {...a11yProps(3)} />
            <Tab style={{ fontSize: '14px' }} label="Settings" {...a11yProps(4)} />
          </Tabs>
        </Grid>
        <Grid sm={10} md={9} item xs={12} spacing={2}>
          <Paper style={{ minHeight: '70vh' }} elevation={3}>
            <TabPanel value={value} index={0}>
              Edit Profile
            </TabPanel>
            <TabPanel value={value} index={1}>
              Profile Photo
            </TabPanel>
            <TabPanel value={value} index={2}>
              <PaymentSetup></PaymentSetup>
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
    </div>
  );
}
