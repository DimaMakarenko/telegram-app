import * as Yup from 'yup';

const getValidationSchema = () =>
  Yup.object({
    email: Yup.string().email('email').required('rec'),
    password: Yup.string().min(6, 'min 6').max(64, 'max 64').required('rec'),
  }).defined();

export default getValidationSchema;
