import React from 'react';
// styles
import styled from 'styled-components';

export type InputComponentProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
  isPassword?: boolean;
  labelStyle?: string;
};

const InputComponent: React.FC<InputComponentProps> = ({
  error,
  isPassword,
  labelStyle,
  label,
  ...props
}) => (
  <Wrapper>
    <Input {...props} />
    <Label htmlFor={props.name}>{label}</Label>
    {error && <Error>{error}</Error>}
  </Wrapper>
);

const Error = styled.span``;
const Input = styled.input``;
const Label = styled.label`
  ${Input}:hover ~ & {
    top: -18px;
    font-size: 14px;
    color: #5264ae;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default InputComponent;
