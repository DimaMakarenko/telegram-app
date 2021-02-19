import React from 'react';
// types
import { ITheme } from 'theme';
// styles
import styled from 'styled-components';

type StyleType = {
  errorStyle: string;
  theme: ITheme;
};

export type InputComponentProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
};

const InputComponent: React.FC<InputComponentProps> = ({ error = '', label, ...props }) => (
  <Wrapper>
    <Label htmlFor={props.name} errorStyle={error}>
      {error || label}
    </Label>
    <Input {...props} errorStyle={error} />
  </Wrapper>
);

const Label = styled.label`
  transition: 0.15s;
  pointer-events: none;
  font-weight: 400;
  display: block;
  font-size: 13px;
  color: ${({ errorStyle, theme }: StyleType) =>
    `${errorStyle ? `${theme.colors.danger}` : ' #999'}`};
`;
const Input = styled.input`
  color: #000;
  display: inline-block;
  background-color: transparent;
  border: 0;
  outline: 0;
  font-size: 13px;
  margin: 3px 0;
  width: 100%;
  padding-bottom: 3px;
  border-bottom: ${({ errorStyle, theme }: StyleType) =>
    `1px solid ${errorStyle ? `${theme.colors.danger}` : '#e6e6e6'}`};

  &:focus {
    border-bottom: 2px solid #6bace1;
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin: 10px 0 20px;
`;
export default InputComponent;
