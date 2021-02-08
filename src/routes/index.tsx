import React, { memo } from 'react';
// router
import { Switch, Route } from 'react-router-dom';
// components
import Main from 'pages/Main';
// styles
import styled from 'styled-components';

const App: React.FC = () => {
  return (
    <Wrapper className='App'>
      <Switch>
        <Route path='/' component={Main} />
      </Switch>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${(props) => `${props.theme.colors.primary}`};
  color: ${(props) => `${props.theme.colors.font}`};
  height: 100vh;
`;

export default memo(App);
