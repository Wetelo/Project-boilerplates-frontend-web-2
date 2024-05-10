import { z } from 'zod';
import { emailSchema, requiredStringSchema } from '@/utils/form-validation';

export const loginValidationSchema = z.object({
  email: emailSchema(requiredStringSchema()),
  password: requiredStringSchema(),
});

export type LoginFormValues = z.infer<typeof loginValidationSchema>;

export const getDefaultFormValues = (): LoginFormValues => ({
  email: '',
  password: '',
});
