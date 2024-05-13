import { z } from 'zod';
import { passwordConfirmationSchema, requiredStringSchema, strongPasswordSchema } from '@/utils/form-validation';

export const changePasswordValidationSchema = passwordConfirmationSchema(
  z.object({
    currentPassword: requiredStringSchema(),
    newPassword: strongPasswordSchema(),
    confirmNewPassword: requiredStringSchema(),
  }),
  (data) => data.newPassword === data.confirmNewPassword,
  {
    message: "Passwords don't match",
    path: ['confirmNewPassword'],
  },
);
export type ChangePasswordFormValues = z.infer<typeof changePasswordValidationSchema>;

export const getDefaultFormValues = (): ChangePasswordFormValues => ({
  currentPassword: '',
  newPassword: '',
  confirmNewPassword: '',
});
