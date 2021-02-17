import React from 'react';
// pages
import SingIn from 'pages/Auth/SignIn';
import SignUp from 'pages/Auth/SignUp';
// routers
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthRoutes } from 'routes/Routes';

const Auth: React.FC = () => {
  return (
    <Switch>
      <Route exact path={AuthRoutes.SignIn} component={SingIn} />
      <Route exact path={AuthRoutes.SignUp} component={SignUp} />
      <Redirect to={AuthRoutes.SignIn} />
    </Switch>
  );
};

export default Auth;
