import React from 'react';
// pages
import SignIn from 'pages/Auth/SignIn';
import SignUp from 'pages/Auth/SignUp';
// components
import { CustomHelmet } from 'components/Helmet';
// routers
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthRoutes } from 'routes/Routes';

const Auth: React.FC = () => {
  const signIn = () => (
    <>
      <CustomHelmet
        title='helmet:signIn:title'
        description='helmet:signIn:description'
        content='helmet:signIn:content'
      />
      <SignIn />
    </>
  );

  const signUp = () => (
    <>
      <CustomHelmet
        title='helmet:signUp:title'
        description='helmet:signUp:description'
        content='helmet:signUp:content'
      />

      <SignUp />
    </>
  );

  return (
    <Switch>
      <Route exact path={AuthRoutes.SignIn} component={signIn} />
      <Route exact path={AuthRoutes.SignUp} component={signUp} />
      <Redirect to={AuthRoutes.SignIn} />
    </Switch>
  );
};

export default Auth;
