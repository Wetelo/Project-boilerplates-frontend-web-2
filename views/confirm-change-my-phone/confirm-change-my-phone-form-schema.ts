import { z } from 'zod';
import { phoneNumberSchema, requiredStringSchema } from '@/utils/form-validation';

export const confirmChangeMyPhoneSchema = z.object({
  phone: phoneNumberSchema(requiredStringSchema()),
  code: requiredStringSchema(),
});

export type ConfirmChangeMyPhoneFormValues = z.infer<typeof confirmChangeMyPhoneSchema>;

export const getDefaultFormValues = (
  overridedFormValues?: Partial<ConfirmChangeMyPhoneFormValues>,
): ConfirmChangeMyPhoneFormValues => ({
  code: '',
  phone: '',
  ...overridedFormValues,
});
