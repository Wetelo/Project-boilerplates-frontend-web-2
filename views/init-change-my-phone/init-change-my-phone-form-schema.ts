import { z } from 'zod';
import { phoneNumberSchema, requiredStringSchema } from '@/utils/form-validation';

export const initChangeMyPhoneValidationSchema = z.object({
  phone: phoneNumberSchema(requiredStringSchema()),
});

export type InitChangeMyPhoneFormValues = z.infer<typeof initChangeMyPhoneValidationSchema>;

export const getDefaultFormValues = (): InitChangeMyPhoneFormValues => ({
  phone: '',
});
