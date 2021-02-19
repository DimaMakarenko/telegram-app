// types
import { FormikHelpers } from 'formik';
// localization
import { i18n } from 'services/localization';
// utils
import * as Yup from 'yup';
import getValidationSchema from './validation';
import { GetFormValuesTypeOnSubmit } from 'utils/types/formFieldTypes';

const validationSchema = getValidationSchema(i18n.t);

export type SignInFormValuesType = Yup.InferType<typeof validationSchema>;
export type SignInFormValuesTypeOnSubmit = GetFormValuesTypeOnSubmit<SignInFormValuesType>;
export type SignInFormOnSubmit = (
  values: SignInFormValuesTypeOnSubmit,
  formikHelpers: FormikHelpers<SignInFormValuesTypeOnSubmit>,
) => void | Promise<void>;
