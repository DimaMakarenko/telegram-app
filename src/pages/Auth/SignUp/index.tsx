import React, { useMemo, useCallback } from 'react';
// components
import Form from './Form';
import FromWrapper from '../FormWrapper';
// hooks
import useAuth from 'hooks/auth';
// types
import { SignUpFormOnSubmit, SignUpFormValuesType } from './Form/types';

const SignUp: React.FC = () => {
  const { signUp } = useAuth();
  const initialValues = useMemo(
    (): SignUpFormValuesType => ({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }),
    [],
  );

  const onSignUp: SignUpFormOnSubmit = useCallback(
    async (values, { setErrors, setSubmitting }) => {
      await signUp(values).catch((e) => {
        setErrors({ email: e.message });
        setSubmitting(false);
      });
    },
    [signUp],
  );

  return (
    <FromWrapper>
      <Form initialValues={initialValues} onSubmit={onSignUp} />
    </FromWrapper>
  );
};

export default SignUp;
