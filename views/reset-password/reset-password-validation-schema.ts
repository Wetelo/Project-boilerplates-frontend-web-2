import { z } from 'zod';
import { passwordConfirmationSchema, requiredStringSchema, strongPasswordSchema } from '@/utils/form-validation';

export const resetPasswordValidationSchema = passwordConfirmationSchema(
  z.object({
    password: strongPasswordSchema(),
    confirmPassword: requiredStringSchema(),
  }),
);

export type ResetPasswordFormValues = z.infer<typeof resetPasswordValidationSchema>;

export const getDefaultFormValues = (): ResetPasswordFormValues => ({
  password: '',
  confirmPassword: '',
});
