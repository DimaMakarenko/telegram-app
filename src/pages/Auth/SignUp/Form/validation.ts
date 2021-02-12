import * as Yup from 'yup';
// localization
import { TFunction } from 'i18next';

const getValidationSchema = (t: TFunction) =>
  Yup.object({
    firstName: Yup.string().required(t('forms:required')),
    lastName: Yup.string().required(t('forms:required')),
    email: Yup.string().email(t('forms:email')).required(t('forms:required')),
    password: Yup.string()
      .min(
        6,
        t('forms:minNumberValue', {
          min: 6,
        }),
      )
      .max(
        64,
        t('forms:maxNumberValue', {
          max: 64,
        }),
      )
      .required(t('forms:required')),
  }).defined();

export default getValidationSchema;
