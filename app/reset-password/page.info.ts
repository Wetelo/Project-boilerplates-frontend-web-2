import { z } from 'zod';

export const Route = {
  name: 'Reset password',
  params: z.object({}),
  search: z.object({ code: z.string().optional(), email: z.string().optional() }),
};
