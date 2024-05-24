import { z } from 'zod';
import {
  emailSchema,
  passwordConfirmationSchema,
  phoneNumberSchema,
  removeWhitespace,
  requiredStringSchema,
  strongPasswordSchema,
} from '@/utils/form-validation';

export const registrationValidationSchema = passwordConfirmationSchema(
  z.object({
    firstName: removeWhitespace(requiredStringSchema()),
    lastName: removeWhitespace(requiredStringSchema()),
    email: emailSchema(requiredStringSchema()),
    phone: phoneNumberSchema(requiredStringSchema()),
    password: strongPasswordSchema(),
    confirmPassword: requiredStringSchema(),
  }),
);

export type RegistrationFormValues = z.infer<typeof registrationValidationSchema>;

export const getDefaultFormValues = (): RegistrationFormValues => ({
  lastName: '',
  firstName: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
});
