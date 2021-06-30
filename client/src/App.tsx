/* eslint-disable prettier/prettier */
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import ProfilePhoto from './pages/Dashboard/Profile/ProfilePhoto';
import Booking from './pages/Dashboard/Booking/Booking';
import dotenv from 'dotenv';
dotenv.config();

import './App.css';
import ProfileDashboard from './pages/Profile/ProfileDashboard';

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
                <Route exact path="/profile" component={ProfileDashboard} />
                <Route exact path="/profile-photo" component={ProfilePhoto} />
                <Route exact path="/booking" component={Booking} />
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="*">
                  <Redirect to="/" />
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
