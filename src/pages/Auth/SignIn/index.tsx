import React, { useMemo, useCallback } from 'react';
// components
import Form from './Form';
import FromWrapper from '../FormWrapper';
// hooks
import useAuth from 'hooks/auth';
// types
import { SignInFormOnSubmit, SignInFormValuesType } from './Form/types';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const initialValues = useMemo(
    (): SignInFormValuesType => ({
      email: '',
      password: '',
    }),
    [],
  );

  const onSignIn: SignInFormOnSubmit = useCallback(
    async (values, { setErrors, setSubmitting }) => {
      await signIn(values).catch((e) => {
        setErrors({ email: e.message });
        setSubmitting(false);
      });
    },
    [signIn],
  );

  return (
    <FromWrapper>
      <Form initialValues={initialValues} onSubmit={onSignIn} />
    </FromWrapper>
  );
};

export default SignIn;
