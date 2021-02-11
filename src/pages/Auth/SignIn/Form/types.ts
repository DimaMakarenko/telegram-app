// types
import { FormikHelpers } from 'formik';
// utils
import * as Yup from 'yup';
import getValidationSchema from './validation';
import { GetFormValuesTypeOnSubmit } from 'utils/types/formFieldTypes';

const validationSchema = getValidationSchema();

export type SignInFormValuesType = Yup.InferType<typeof validationSchema>;
export type SignInFormValuesTypeOnSubmit = GetFormValuesTypeOnSubmit<SignInFormValuesType>;
export type SignInFormOnSubmit = (
  values: SignInFormValuesTypeOnSubmit,
  formikHelpers: FormikHelpers<SignInFormValuesTypeOnSubmit>,
) => void | Promise<void>;
