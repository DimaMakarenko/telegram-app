import React, { useMemo, useCallback } from 'react';
// components
import Form from './Form';
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
    <div>
      <Form initialValues={initialValues} onSubmit={onSignUp} />
    </div>
  );
};

export default SignUp;
