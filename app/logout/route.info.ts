import { z } from 'zod';

export const Route = {
  name: 'Logout',
  params: z.object({}),
};

export const GET = {
  result: z.object({}),
};
