import React from 'react';
import { useField, FieldConfig } from 'formik';
// components
import InputComponent, { InputComponentProps } from './Component';

type InputFieldPropsType = FieldConfig & InputComponentProps;

const InputField: React.FC<InputFieldPropsType> = (props) => {
  const [{ name, value, onChange, onBlur }, { error, touched }] = useField({
    name: props.name,
    value: props.value,
  });

  return (
    <InputComponent
      {...props}
      value={value}
      onChange={onChange(name)}
      onBlur={onBlur(name)}
      error={!!touched && !!error ? error : ''}
    />
  );
};

export default InputField;
