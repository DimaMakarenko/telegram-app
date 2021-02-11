import React from 'react';
// components
import { Formik } from 'formik';
import Input from 'components/Form/Input';
import Button from 'components/Button';
// localization
import { useTranslation } from 'react-i18next';
// types
import { SignInFormValuesType, SignInFormOnSubmit } from './types';
// utils
import getValidationSchema from './validation';

type Props = {
  initialValues: SignInFormValuesType;
  onSubmit: SignInFormOnSubmit;
};

const SignInForm: React.FC<Props> = ({ initialValues, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getValidationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <>
          <Input name='email' label={t('auth:email')} type='email' />
          <Input name='password' label={t('auth:password')} type='password' />
          <Button type='submit' onClick={() => handleSubmit()} isLoading={isSubmitting}>
            {t('common:next')}
          </Button>
        </>
      )}
    </Formik>
  );
};
export default SignInForm;
