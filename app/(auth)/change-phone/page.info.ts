import { phoneNumberSchema } from '@/utils/form-validation';
import { z } from 'zod';

export const Route = {
  name: 'ConfirmChangeMyPhone',
  params: z.object({}),
  search: z.object({ code: z.string().optional(), phone: phoneNumberSchema(z.string()) }),
};
