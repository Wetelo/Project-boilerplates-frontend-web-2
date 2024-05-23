import { z } from 'zod';
import { emailSchema, requiredStringSchema } from '@/utils/form-validation';

export const initChangeMyEmailValidationSchema = z.object({
  email: emailSchema(requiredStringSchema()),
});

export type InitChangeMyEmailFormValues = z.infer<typeof initChangeMyEmailValidationSchema>;

export const getDefaultFormValues = (): InitChangeMyEmailFormValues => ({
  email: '',
});
