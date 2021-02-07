import React, { memo } from 'react';
// styles
import styled from 'styled-components';

const App: React.FC = () => {
  return <Wrapper className='App'>hii shsh</Wrapper>;
};

const Wrapper = styled.div`
  background: ${(props) => `${props.theme.colors.primary}`};
  color: ${(props) => `${props.theme.colors.font}`};
  height: 100vh;
`;

export default memo(App);
