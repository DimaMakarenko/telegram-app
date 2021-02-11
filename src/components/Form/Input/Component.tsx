import React from 'react';

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
}) => {
  return (
    <div>
      <label htmlFor={props.name}>{label}</label>

      <div>
        <input {...props} />
      </div>
      {error && <span>{error}</span>}
    </div>
  );
};

export default InputComponent;
