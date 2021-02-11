import React, { useMemo, useCallback } from 'react';
// components
import Form from './Form';
// types
import { SignInFormOnSubmit, SignInFormValuesType } from './Form/types';

const SignIn: React.FC = () => {
  const initialValues = useMemo(
    (): SignInFormValuesType => ({
      email: '',
      password: '',
    }),
    [],
  );

  const onSignIn: SignInFormOnSubmit = useCallback(async (values) => {
    console.log('values', values);
  }, []);

  return (
    <div>
      <Form initialValues={initialValues} onSubmit={onSignIn} />
    </div>
  );
};

export default SignIn;
