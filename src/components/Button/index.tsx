import React from 'react';
// styles
import styled, { keyframes } from 'styled-components';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

const Button: React.FC<Props> = ({ isLoading, children, ...rest }) => {
  return (
    <ButtonStyled {...rest} disabled={isLoading}>
      {isLoading && <Loader />}
      {children}
    </ButtonStyled>
  );
};
const ButtonStyled = styled.button`
  padding: 6px;
  border: 2px solid red;
  box-sizing: border-box;
  cursor: pointer;
`;

const loadAnimate = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `;

const Loader = styled.span`
  display: block;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  border: 2px solid blue;
  animation: ${loadAnimate} infinite linear 1s;
  border-top: 2px solid transparent;
  margin-right: 8px;
`;

export default Button;
