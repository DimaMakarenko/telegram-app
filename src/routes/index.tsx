import React, { memo, useCallback, useEffect, useContext } from 'react';
// pages
import Main from 'pages/Main';
// context
import { UserContext, UserContextType } from 'context/userContext';
// router
import { Switch, Route } from 'react-router-dom';
import { AuthRoutes } from 'routes/Routes';
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
      <Switch>
        {!user ? (
          <>
            <Route exact path={[AuthRoutes.SignIn, AuthRoutes.SignUp]} component={Auth} />
          </>
        ) : (
          <>
            <Route exact path='/chats' component={Main} />
          </>
        )}
      </Switch>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
`;

export default memo(App);
