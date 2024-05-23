import { z } from 'zod';

export const Route = {
  name: 'ConfirmChangeMyEmail',
  params: z.object({}),
  search: z.object({ code: z.string().optional(), email: z.string().email() }),
};
