import { z } from 'zod';
import { requiredStringSchema } from '@/utils/form-validation';

export const loginValidationSchema = z.object({
  email: requiredStringSchema().email('This email is incorrect'),
  password: requiredStringSchema(),
});

export type LoginFormValues = z.infer<typeof loginValidationSchema>;

export const getDefaultFormValues = (): LoginFormValues => ({
  email: '',
  password: '',
});
