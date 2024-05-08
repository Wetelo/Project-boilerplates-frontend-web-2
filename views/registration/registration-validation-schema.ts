import { z } from 'zod';
import {
  phoneNumberSchema,
  removeWhitespace,
  requiredStringSchema,
  strongPasswordSchema,
} from '@/utils/form-validation';

export const registrationValidationSchema = z
  .object({
    firstName: removeWhitespace(requiredStringSchema()),
    lastName: removeWhitespace(requiredStringSchema()),
    email: requiredStringSchema().email('This email is incorrect'),
    phone: phoneNumberSchema(),
    password: strongPasswordSchema(),
    confirmPassword: requiredStringSchema(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type RegistrationFormValues = z.infer<typeof registrationValidationSchema>;

export const getDefaultFormValues = (): RegistrationFormValues => ({
  lastName: '',
  firstName: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
});
