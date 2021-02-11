import React from 'react';
// styles
import styled from 'styled-components';

export type InputComponentProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
};

const InputComponent: React.FC<InputComponentProps> = ({ error, label, ...props }) => (
  <Wrapper>
    <Input {...props} />
    <Label htmlFor={props.name}>{label}</Label>
    {error && <Error>{error}</Error>}
  </Wrapper>
);

const Error = styled.span``;
const Input = styled.input`
  color: #000;
  background: #fff;
  display: inline-block;
  border: 0;
  outline: 0;
  font-size: 13px;
  padding: 3px 0;
  margin: 3px 0 0;
  width: 100%;
  resize: none;
`;
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
  position: relative;
  border-bottom: 1px solid #e6e6e6;

  ${Input}:hover + {
    border-bottom: 5px solid #6bece1;
  }
`;
export default InputComponent;
