// types
import { FormikHelpers } from 'formik';
// localization
import { i18n } from 'services/localization';
// utils
import * as Yup from 'yup';
import getValidationSchema from './validation';
import { GetFormValuesTypeOnSubmit } from 'utils/types/formFieldTypes';

const validationSchema = getValidationSchema(i18n.t);

export type SignUpFormValuesType = Yup.InferType<typeof validationSchema>;
export type SignUpFormValuesTypeOnSubmit = GetFormValuesTypeOnSubmit<SignUpFormValuesType>;
export type SignUpFormOnSubmit = (
  values: SignUpFormValuesTypeOnSubmit,
  formikHelpers: FormikHelpers<SignUpFormValuesTypeOnSubmit>,
) => void | Promise<void>;
