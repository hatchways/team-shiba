/* eslint-disable prettier/prettier */
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Profile from './pages/Profile/Profile';
import Dashboard from './pages/Dashboard/Dashboard';
import ProfileDetails from './pages/ProfileDetails/ProfileDetails';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import ProtectedRoute from './routes/ProtectedRoute';
import React, { useState } from 'react';
import ProfilePhoto from './pages/Dashboard/Profile/ProfilePhoto';
import Booking from './pages/Dashboard/Booking/Booking';

import dotenv from 'dotenv';
dotenv.config();
import './App.css';

function App(): JSX.Element {
  console.log('the value of dummy is ', process.env.REACT_APP_DUMMY);
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/profile-photo" component={ProfilePhoto} />
                <Route exact path="/profile-details" component={ProfileDetails} />
                <Route exact path="/booking" component={Booking} />
                <Route path="*">
                  <Redirect to="/signup" />
                </Route>
              </Switch>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
