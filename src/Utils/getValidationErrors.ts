import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};
  err.inner.forEach(error => {
    const paths = error.path as string;

    validationErrors[paths] = error.message;
  });
  return validationErrors;
}
