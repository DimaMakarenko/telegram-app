import React from 'react';
// components
import { Formik } from 'formik';
import Input from 'components/Form/Input';
import Button from 'components/Button';
// types
import { SignInFormValuesType, SignInFormOnSubmit } from './types';
// utils
import getValidationSchema from './validation';

type Props = {
  initialValues: SignInFormValuesType;
  onSubmit: SignInFormOnSubmit;
};

const SignInForm: React.FC<Props> = ({ initialValues, onSubmit }) => (
  <Formik initialValues={initialValues} validationSchema={getValidationSchema} onSubmit={onSubmit}>
    {({ handleSubmit, isSubmitting }) => (
      <>
        <Input name='email' label={'email'} type='email' />
        <Input name='password' label={'password'} type='password' />
        <Button type='submit' onClick={() => handleSubmit()} isLoading={isSubmitting}>
          next
        </Button>
      </>
    )}
  </Formik>
);

export default SignInForm;
