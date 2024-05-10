import { z } from 'zod';
import { emailSchema, requiredStringSchema } from '@/utils/form-validation';

export const forgotPasswordValidationSchema = z.object({
  email: emailSchema(requiredStringSchema()),
});
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordValidationSchema>;

export const getDefaultFormValues = (): ForgotPasswordFormValues => ({
  email: '',
});
