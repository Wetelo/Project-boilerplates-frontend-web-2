import { z } from 'zod';
import { emailSchema, requiredStringSchema } from '@/utils/form-validation';

export const confirmChangeMyEmailSchema = z.object({
  email: emailSchema(requiredStringSchema()),
  code: requiredStringSchema(),
});

export type ConfirmChangeMyEmailFormValues = z.infer<typeof confirmChangeMyEmailSchema>;

export const getDefaultFormValues = (
  overridedFormValues?: Partial<ConfirmChangeMyEmailFormValues>,
): ConfirmChangeMyEmailFormValues => ({
  code: '',
  email: '',
  ...overridedFormValues,
});
