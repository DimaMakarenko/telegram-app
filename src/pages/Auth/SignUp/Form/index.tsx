import React, { useMemo } from 'react';
// components
import { Formik } from 'formik';
import Input from 'components/Form/Input';
import Button from 'components/Button';
// localization
import { useTranslation } from 'react-i18next';
// types
import { SignUpFormValuesType, SignUpFormOnSubmit } from './types';
// utils
import getValidationSchema from './validation';

type Props = {
  initialValues: SignUpFormValuesType;
  onSubmit: SignUpFormOnSubmit;
};

const SignUpForm: React.FC<Props> = ({ initialValues, onSubmit }) => {
  const { t } = useTranslation();
  const validationSchema = useMemo(() => getValidationSchema(t), [t]);

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit, isSubmitting }) => (
        <>
          <Input name='firstName' label={t('profile:firstName')} type='text' />
          <Input name='lastName' label={t('profile:lastName')} type='text' />
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
export default SignUpForm;
