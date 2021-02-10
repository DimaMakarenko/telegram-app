import React from 'react';
// pages
import SingIn from 'pages/Auth/SignIn';
// routers
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthRoutes } from 'routes/Routes';

const Auth: React.FC = () => {
  return (
    <Switch>
      <Route exact path={AuthRoutes.SignIn} component={SingIn} />
      <Redirect to='/' />
    </Switch>
  );
};

export default Auth;
