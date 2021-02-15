import React from 'react';
// styles
import styled from 'styled-components';

const FormWrapper: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>
        <Children>{children}</Children>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background: rgb(231, 235, 240);
`;

const Header = styled.div`
  background: #5682a3;
  height: 226px;
`;

const Main = styled.div``;
const Children = styled.div`
  background: #fff;
  padding: 44px 65px;
  box-shadow: 0 1px 1px rgb(97 127 152 / 20%), 1px 0 0 rgb(97 127 152 / 10%),
    -1px 0 0 rgb(97 127 152 / 10%);
  border-radius: 2px;
  transform: translateY(-131px);
  margin: 0 auto 90px;
  max-width: 404px;
`;

export default FormWrapper;
