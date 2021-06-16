import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import ProfileDashboard from './pages/ProfileSetup/ProfileDashboard';

import './App.css';
import Header from './components/Header/Header';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
                <Route exact path="/profiledashboard">
                  <>
                    <Header></Header>
                    <ProfileDashboard></ProfileDashboard>
                  </>
                </Route>
                <Route path="*">
                  <Redirect to="/login" />
                </Route>
                <Route exact path="/home">
                  <h2>Home</h2>
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
