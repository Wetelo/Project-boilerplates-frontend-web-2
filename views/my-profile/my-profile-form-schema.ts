import { z } from 'zod';
import { requiredStringSchema } from '@/utils/form-validation';

export const myProfileValidationSchema = z.object({
  firstName: requiredStringSchema(),
  lastName: requiredStringSchema(),
  avatarFileUUID: z.string().optional(),
  email: z.string(),
});
export type MyProfileFormValues = z.infer<typeof myProfileValidationSchema>;

export const getDefaultFormValues = (overridedFormValues?: Partial<MyProfileFormValues>): MyProfileFormValues => ({
  firstName: '',
  lastName: '',
  email: '',
  ...overridedFormValues,
});
