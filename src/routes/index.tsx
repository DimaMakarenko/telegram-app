import React, { memo, useCallback, useEffect, useContext } from 'react';
// pages
import Main from 'pages/Main';
// components
import { AppHelmet } from 'components/Helmet';
// context
import { UserContext, UserContextType } from 'context/userContext';
// router
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthRoutes, ChatRoutes } from 'routes/Routes';
import Auth from 'routes/Auth';
// services
import { getAuthData } from 'services/storage/auth';
// hooks
import useAuth from 'hooks/auth';
// styles
import styled from 'styled-components';

const App: React.FC = () => {
  const { user } = useContext(UserContext) as UserContextType;
  const { getUser } = useAuth();

  const bootstrapAsync = useCallback(async () => {
    const authToken = await getAuthData();

    if (authToken) {
      getUser(authToken);
    }
  }, [getUser]);

  useEffect(() => {
    bootstrapAsync();
  }, [bootstrapAsync]);

  return (
    <Wrapper className='App'>
      <AppHelmet />
      <Switch>
        <Route path={ChatRoutes.Chats} component={Main} />
        <Route path={[AuthRoutes.SignIn, AuthRoutes.SignUp]} component={Auth} />

        {!user ? <Redirect to={AuthRoutes.SignIn} /> : <Redirect to={ChatRoutes.Chats} />}
      </Switch>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
`;

export default memo(App);
